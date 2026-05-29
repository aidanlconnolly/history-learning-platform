import { useEffect, useState } from "react";
import type { ImageRef } from "../data/types";

// Resolve a Wikipedia article's lead image at runtime via the public REST
// summary API (CORS-enabled, no key). Results are cached per title for the
// session so we never refetch the same article. If the lookup fails or the
// article has no image, callers fall back to a themed placeholder.

type Resolved = { url: string | null };
const cache = new Map<string, Promise<Resolved>>();

function fetchLeadImage(title: string): Promise<Resolved> {
  const existing = cache.get(title);
  if (existing) return existing;

  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    title
  )}?redirect=true`;

  const promise = fetch(url)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .then((data) => ({
      url: data?.originalimage?.source ?? data?.thumbnail?.source ?? null,
    }))
    .catch(() => ({ url: null }));

  cache.set(title, promise);
  return promise;
}

type Props = {
  image: ImageRef;
  /** Accent color used for the fallback placeholder gradient. */
  accent: string;
  emblem?: string;
  className?: string;
  /** Tailwind aspect/height utility, e.g. "aspect-[16/9]" or "h-full". */
  ratioClassName?: string;
  rounded?: boolean;
};

export default function WikiImage({
  image,
  accent,
  emblem = "📜",
  className = "",
  ratioClassName = "aspect-[16/10]",
  rounded = true,
}: Props) {
  const [url, setUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "fallback">("loading");

  useEffect(() => {
    let active = true;
    setStatus("loading");
    setUrl(null);
    fetchLeadImage(image.wikiTitle).then(({ url }) => {
      if (!active) return;
      if (url) {
        setUrl(url);
        setStatus("ok");
      } else {
        setStatus("fallback");
      }
    });
    return () => {
      active = false;
    };
  }, [image.wikiTitle]);

  const roundCls = rounded ? "rounded-xl" : "";

  return (
    <figure className={`overflow-hidden ${roundCls} ${className}`}>
      <div className={`relative w-full ${ratioClassName} bg-slate-800`}>
        {status === "ok" && url ? (
          <img
            src={url}
            alt={image.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setStatus("fallback")}
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
            style={{
              background: `linear-gradient(135deg, ${accent}33, ${accent}11)`,
            }}
            aria-label={image.alt}
          >
            <span className="text-4xl opacity-80">{status === "loading" ? "…" : emblem}</span>
          </div>
        )}
      </div>
      {image.caption && (
        <figcaption className="bg-slate-900/70 px-3 py-1.5 text-xs text-slate-400">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

import { Link, useParams } from "react-router-dom";
import { getCiv } from "../lib/civ";
import JourneyPlayer from "../components/JourneyPlayer";

export default function CivilizationPage() {
  const { id } = useParams<{ id: string }>();
  const civ = id ? getCiv(id) : undefined;

  if (!civ) {
    return (
      <div className="py-16 text-center">
        <p className="text-slate-300">That civilization hasn't been charted yet.</p>
        <Link to="/" className="mt-3 inline-block text-sky-400 hover:text-sky-300">
          ← Back to all civilizations
        </Link>
      </div>
    );
  }

  return <JourneyPlayer civ={civ} />;
}

import type { Civilization } from "../types";
import { mesopotamia } from "./mesopotamia";
import { egypt } from "./egypt";
import { greece } from "./greece";
import { persia } from "./persia";
import { rome } from "./rome";
import { china } from "./china";
import { india } from "./india";
import { maya } from "./maya";
import { aztec } from "./aztec";
import { inca } from "./inca";
import { mongol } from "./mongol";
import { ottoman } from "./ottoman";
import { france } from "./france";
import { british } from "./british";

// The full roster of civilization journeys. Order here is the default
// presentation order; the UI sorts by start year via civsByChronology().
export const civilizations: Civilization[] = [
  mesopotamia,
  egypt,
  greece,
  persia,
  rome,
  china,
  india,
  maya,
  aztec,
  inca,
  mongol,
  ottoman,
  france,
  british,
];

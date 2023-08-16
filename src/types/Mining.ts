import type { Crystal } from "./Crystal";

export interface MiningUnit extends Crystal {
  quantity: number
}

export type Mining = MiningUnit[];

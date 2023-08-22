export type CrystalType =
  | "quartzo"
  | "rubelita"
  | "esmeralda"
  | "safira"
  | "rubi"
  | "ambar";

export type CrystalProps = {
  readonly max: number;
  readonly value: number;
  readonly color: string;
};

export type Crystal = {
  readonly type: CrystalType;
  readonly props: CrystalProps;
};

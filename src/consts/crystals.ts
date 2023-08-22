import type { Crystal } from "../types/Crystal";

const CRYSTALS: Crystal[] = [
  {
    type: "quartzo",
    props: {
      max: 15,
      value: 1,
      color: "#8bc5d1",
    },
  },
  {
    type: "rubelita",
    props: {
      max: 12,
      value: 2,
      color: "#e82f83",
    },
  },
  {
    type: "esmeralda",
    props: {
      max: 10,
      value: 3,
      color: "#009645",
    },
  },
  {
    type: "safira",
    props: {
      max: 7,
      value: 4,
      color: "#009de0",
    },
  },
  {
    type: "rubi",
    props: {
      max: 4,
      value: 6,
      color: "#e52025",
    },
  },
  {
    type: "ambar",
    props: {
      max: 2,
      value: 8,
      color: "#f59b00",
    },
  },
];

export default CRYSTALS;

import type { Bonus } from "./Bonus";
import type { MiningUnit } from "./Mining";

interface CrystalResult extends MiningUnit {
  doubled: boolean;
  matchBonusCondition: boolean;
}

export type CalculationResultType = {
  bonus: Bonus;
  points: number;
  eligible: boolean;
  crystals: CrystalResult[];
};

export class CalculationResult {
  bonus: Bonus;
  points: number;
  eligible: boolean;
  crystals: CrystalResult[];

  constructor(bonus: Bonus, eligible: boolean, crystals: CrystalResult[]) {
    this.bonus = bonus;
    this.eligible = eligible;
    this.crystals = crystals;
    this.points = this.sumPoints();
  }

  private sumPoints = (): number => {
    // Adds +8 | +12 if bonus is "plus-8" | "plus-12"
    let initialValue = 0;
    if (this.eligible && this.bonus === "plus-8") initialValue += 8;
    else if (this.eligible && this.bonus === "plus-12") initialValue += 12;

    // Sum all crystal points considering doubled bonus
    return this.crystals.reduce((acc: number, curr: CrystalResult) => {
      let crystalTotal = curr.quantity * curr.props.value;
      if (curr.doubled) crystalTotal *= 2;
      return acc + crystalTotal;
    }, initialValue);
  }
}

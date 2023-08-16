import type { Bonus } from "../types/Bonus";
import { CalculationResult } from "../types/CalculationResult";
import type { Mining, MiningUnit } from "../types/Mining";

const _orderByPoints = (mining: Mining): Mining =>
  mining.sort((u1: MiningUnit, u2: MiningUnit) => {
    const u1Sum = u1.quantity * u1.props.value;
    const u2Sum = u2.quantity * u2.props.value;
    return u2Sum - u1Sum;
  });

const _mapSimpleCrystalResult = (mining: Mining): CrystalResult[] =>
  mining.map((unit) => ({
    ...unit,
    doubled: false,
    matchBonusCondition: false,
  }));

const _calculateDoubleBonus = (
  bonus: Bonus,
  mining: Mining
): CalculationResult => {
  if (bonus !== "double" && bonus !== "2xdouble") {
    throw new Error("Cannot calculate not 'double' bonuses");
  }

  const orderedMining = _orderByPoints(mining);
  const mappedCrystals = _mapSimpleCrystalResult(orderedMining);

  // Decides the condition
  let qntCondition = 3;
  if (bonus === "2xdouble") qntCondition = 4;

  const lessValuedBonusMatching = mappedCrystals.findLast(
    (c) => c.quantity >= qntCondition
  );

  // Check if there's any crystal matching bonus conditions
  // and if there's enough crystals to apply the bonus:
  // double -> at least 2 crystals
  // 2xdouble -> at least 3 crystals
  let minRequiredIndex = 1;
  if (bonus === "2xdouble") minRequiredIndex = 2;

  if (
    !lessValuedBonusMatching ||
    mappedCrystals[minRequiredIndex].quantity === 0
  ) {
    return new CalculationResult(bonus, false, mappedCrystals);
  }

  // Checks the matching crystal
  lessValuedBonusMatching.matchBonusCondition = true;

  // Double the greatest(s) crystal(s) pointer(s) aside from the matching one
  const filtered = mappedCrystals.filter(
    (c) => c.quantity > 0 && !c.matchBonusCondition
  );

  filtered[0].doubled = true;
  if (bonus === "2xdouble") filtered[1].doubled = true;

  return new CalculationResult(bonus, true, mappedCrystals);
};

const _calculatePlusBonus = (
  bonus: Bonus,
  mining: Mining
): CalculationResult => {
  // Validate bonus types
  if (bonus !== "plus-8" && bonus !== "plus-12") {
    throw new Error("Cannot calculate not 'plus' bonuses");
  }

  const orderedMining = _orderByPoints(mining);
  const mappedCrystals = _mapSimpleCrystalResult(orderedMining);

  // Set min index to have mined considering mining is ordered
  let minRequiredIndex = 4;
  if (bonus === "plus-12") minRequiredIndex = 5;

  return new CalculationResult(
    bonus,
    mappedCrystals[minRequiredIndex].quantity > 0,
    mappedCrystals,
  );
};

// Returns all bonus calculations ordered by points
const calculate = (mining: Mining): CalculationResult[] =>   
  [
    _calculateDoubleBonus("double", mining),
    _calculateDoubleBonus("2xdouble", mining),
    _calculatePlusBonus("plus-8", mining),
    _calculatePlusBonus("plus-12", mining)
  ].sort((result1, result2) => result2.points - result1.points)

export default { calculate };

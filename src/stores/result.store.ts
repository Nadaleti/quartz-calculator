import { writable, type Writable } from 'svelte/store';
import type { CalculationResult } from '../types/CalculationResult';

const results: Writable<CalculationResult[]> = writable([]);

export default results;

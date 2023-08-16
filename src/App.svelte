<script lang="ts">
  import crystals from "./consts/crystals";
  import calculator from "./services/calculator";
  import type { CalculationResult } from "./types/CalculationResult";
  import type { Mining } from "./types/Mining";

  let results: CalculationResult[] = [];
  let mining: Mining = crystals.map((crystal) => ({ ...crystal, quantity: 0 }));

  const calculatePoints = () => {
    results = calculator.calculate([...mining]);
  };
</script>

<main>
  <form on:submit|preventDefault={calculatePoints}>
    {#each mining as unit}
      <p>{unit.type.charAt(0).toUpperCase() + unit.type.substring(1)}</p>
      <input
        type="number"
        id={unit.type}
        name={unit.type}
        min="0"
        max={unit.props.max}
        bind:value={unit.quantity}
      />
    {/each}
    <br />
    <button>Calcular</button>
  </form>
  <div>
    {#each results as result}
      <p>{result.bonus}: ${result.points}</p>
      {#each result.crystals as { quantity, props, doubled }}
        {@const total = quantity * props.value}
        <p>
          {quantity} x {props.value} = {total}
          {#if doubled}
            <span> x 2 = {total * 2}</span>
          {/if}
        </p>
      {/each}
    {/each}
  </div>
</main>

<style>
</style>

<script lang="ts">
  import crystals from "./consts/crystals";
  import calculator from "./services/calculator";
  import type { Mining } from "./types/Mining";

  let mining: Mining = crystals.map((crystal) => ({ ...crystal, quantity: 0 }));
</script>

<main>
  <form on:submit|preventDefault={() => calculator.calculate([...mining])}>
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
</main>

<style>
</style>

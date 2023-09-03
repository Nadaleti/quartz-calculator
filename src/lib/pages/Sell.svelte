<script lang="ts">
  import { navigate } from "svelte-routing";
  import type { Mining } from "../../types/Mining";
  import type { CalculationResult } from "../../types/CalculationResult";
  
  import crystals from "../../consts/crystals";
  import calculator from "../../services/calculator";
  import { default as resultStore } from "../../stores/result.store";

  import Button from "../Button.svelte";
  import Gem from "../Gem.svelte";
  import NumberInput from "../NumberInput.svelte";
  import Page from "../Page.svelte";

  const mining: Mining = crystals.map((crystal) => ({ ...crystal, quantity: 0 }));

  const calculatePoints = () => {
    if (mining.every(m => m.quantity == 0)) {
      return;
    }

    const results: CalculationResult[] = calculator.calculate([...mining]);
    resultStore.set(results);
    navigate("/resultado");
  };
</script>

<svelte:head>
  <title>Quartz - Venda</title>
</svelte:head>

<Page>
  <h1 slot="header">VENDA</h1>
  <form id="calc-form" slot="body" on:submit|preventDefault={calculatePoints}>
    {#each mining as unit}
      <div class="crystal-input">
        <div class="gem-wrapper">
          <Gem colorHex={unit.props.color} sizePx={40} />
        </div>
        <NumberInput
          id={unit.type}
          name={unit.type}
          label={unit.type.charAt(0).toUpperCase() + unit.type.substring(1)}
          min={0}
          max={unit.props.max}
          bind:value={unit.quantity}
        />
      </div>
    {/each}
  </form>
  <div slot="footer" class="submit-wrapper">
    <Button
      id="submit-calc-btn"
      crystal="safira"
      type="submit"
      form="calc-form"
    >
      CALCULAR
    </Button>
  </div>
</Page>

<style lang="scss">
  form {
    display: grid;
    height: 100%;
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, 1fr);
    row-gap: 1rem;

    .crystal-input {
      display: flex;
      flex-flow: row;

      & > .gem-wrapper {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: end;
        height: 100%;
        width: 100px;
        margin-right: 1rem;
        padding-bottom: 1rem;
        box-sizing: border-box;
      }
    }
  }

  .submit-wrapper {
    height: 100%;
    width: 100%;
    padding-top: 0.5rem;
    box-sizing: border-box;
  }
</style>

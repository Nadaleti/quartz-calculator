<script lang="ts">
  import type { CalculationResult } from "../../types/CalculationResult";
  import type { Bonus } from "../../types/Bonus";
  import { navigate } from "svelte-routing";

  import results from "../../stores/result.store";
  import Badge from "../Badge.svelte";
  import Button from "../Button.svelte";
  import Page from "../Page.svelte";

  const greatest: CalculationResult = $results ? $results[0] : undefined;
  const bonus: Bonus = greatest && greatest.eligible ? greatest.bonus : "none";

  if (!greatest) {
    navigate("/venda");
    location.reload();
  }

  const goToSell = (): void => {
    results.set([]);
    navigate("/venda");
  };
</script>

<svelte:head>
  <title>Quartz - Resultado</title>
</svelte:head>

<Page>
  <h1 slot="header">RESULTADO</h1>
  <div class="result-container" slot="body">
    {#if greatest}
      <section class="bonus">
        <Badge {bonus} />
        <div class="value"><h1>${greatest.points}</h1></div>
      </section>

      <section class="calculation">
        {#each greatest.crystals as { quantity, props, doubled }}
          {@const total = quantity * props.value}
          <div class="row">
            <p style={`color: ${props.color}`}>
              {quantity} x ${props.value} = ${total}
              {#if doubled}
                <span> x 2 = ${total * 2}</span>
              {/if}
            </p>
          </div>
        {/each}
      </section>
    {/if}
  </div>
  <div slot="footer" class="go-back-wrapper">
    <Button crystal="ambar" type="button" onClick={goToSell}>VOLTAR</Button>
  </div>
</Page>

<style lang="scss">
  .result-container {
    display: grid;
    grid-template-rows: 0.5fr 1fr;
    row-gap: 1rem;
    height: 100%;

    > .bonus {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      place-items: center;

      > .value {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-left: 2px white solid;
      }
    }

    > .calculation {
      padding-top: 1rem;
      border-top: 2px white solid;
      width: 80%;
      margin: 0 auto;

      > .row {
        text-align: left;
        font-size: 1.5rem;
        font-weight: 900;
      }
    }
  }

  .go-back-wrapper {
    height: 100%;
    width: 100%;
    padding-top: 0.5rem;
    box-sizing: border-box;
  }
</style>

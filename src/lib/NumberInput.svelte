<script lang="ts">
  export let id: string;
  export let name: string;
  export let min: number;
  export let max: number;
  export let value: number;
  export let label: string = undefined;
  export let placeholder: string = "";

  const increment = (factor: number) => {
    const updated = value + factor;
    if (updated < min || updated > max) return;
    value = updated;
  };
</script>

<div class="input-group">
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <div class="input">
    <button
      class="min-btn"
      type="button"
      on:click|preventDefault={() => increment(-1)}
    >
      -
    </button>
    <input type="number" {id} {name} {min} {max} {placeholder} bind:value />
    <button
      class="max-btn"
      type="button"
      on:click|preventDefault={() => increment(1)}
    >
      +
    </button>
  </div>
</div>

<style lang="scss">
  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    border: 0px;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  .input-group {
    display: flex;
    flex-flow: column;
    align-items: start;
    width: 100%;
    height: 100%;

    label {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .input {
      display: grid;
      grid-template-columns: 0.5fr 1fr 0.5fr;
      width: 100%;
      height: 100%;

      .min-btn {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        font-size: 1.5rem;
      }

      .max-btn {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 1.5rem;
      }
    }
  }
</style>

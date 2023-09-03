<script lang="ts">
  import type { ButtonStyle } from "../types/Button";
  import type { CrystalType } from "../types/Crystal";
  import crystals from "../consts/crystals";

  export let id: string = Math.random().toString(36).slice(2);
  export let onClick = () => {
    console.log("button " + id + " was clicked");
  };
  export let type: "button" | "submit" = "button";
  export let form: string = undefined;
  export let style: ButtonStyle = "solid";
  export let crystal: CrystalType;

  $: color = crystals.find((c) => c.type === crystal).props.color;
</script>

<button
  style="--main-color: {color};"
  class={style}
  {type}
  {form}
  {id}
  on:click={onClick}
>
  <slot />
</button>

<style lang="scss">
  button {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
  }

  .solid {
    background-color: var(--main-color);
    opacity: 1;

    &:hover {
      opacity: 0.9;
    }
  }

  .outline {
    border: 2px solid var(--main-color);
    background-color: transparent;
    color: var(--main-color);

    &:hover {
      background-color: var(--main-color);
      color: white;
    }
  }
</style>

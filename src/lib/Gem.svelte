<script lang="ts">
  export let colorHex: string;
  export let sizePx: number = 50;

  if (sizePx <= 20) sizePx = 21;
</script>

<div class="gem" style="background-color: {colorHex}; --size-px: {sizePx}px; --size-effect: {sizePx - 20}px;" />

<style lang="scss">
  .gem {
    width: var(--size-px);
    height: var(--size-px);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background-image: -webkit-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2)
    );
    background-image: -moz-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2)
    );
    background-image: -ms-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2)
    );

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: var(--size-effect);
      height: var(--size-effect);
      border: 10px solid;
      border-color: rgba(0, 0, 0, 0.2) rgba(255, 255, 255, 0.15)
        rgba(0, 0, 0, 0.25) rgba(255, 255, 255, 0.4);
      background-image: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.15)
      );
      background-image: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.15)
      );
      background-image: -ms-linear-gradient(
        top,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.15)
      );
    }
  }
</style>

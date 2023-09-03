<script lang="ts">
  import type { Bonus } from "../types/Bonus";

  export let bonus: Bonus;

  let color: string;
  let text: string;
  let ribbon: string;

  switch (bonus) {
    case "double":
      color = "blue";
      text = "2x";
      ribbon = "DUPLO";
      break;
    case "2xdouble":
      color = "blue-dark";
      text = "2x 2x";
      ribbon = "DUPLO DUPLO";
      break;
    case "plus-8":
      color = "purple";
      text = "+8";
      ribbon = "8 PONTOS";
      break;
    case "plus-12":
      color = "green-dark";
      text = "+12";
      ribbon = "12 PONTOS";
      break;
    default:
      color = "silver";
      text = "-";
      ribbon = "NENHUM";
  }
</script>

<div class={`badge ${color}`}>
  <div class="circle">{text}</div>
  <div class="ribbon">{ribbon}</div>
</div>

<style lang="scss">
  @mixin margin-auto {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .badge {
    position: relative;
    margin: 1.5em 3em;
    width: 4em;
    height: 6.2em;
    border-radius: 10px;
    display: inline-block;
    top: 0;

    &:before,
    &:after {
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background: inherit;
      content: "";
      @include margin-auto;
    }

    &:before {
      transform: rotate(60deg);
    }

    &:after {
      transform: rotate(-60deg);
    }

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85px;
      height: 85px;
      position: absolute;
      z-index: 10;
      border-radius: 50%;
      background-color: white;
      font-size: 1.8rem;
      font-family: "Lilita One", sans-serif;
      @include margin-auto;
      left: -10px;
    }

    .ribbon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      border-radius: 4px;
      padding: 5px 5px 4px;
      font-weight: 600;
      width: 100px;
      z-index: 11;
      color: #fff;
      bottom: 12px;
      left: 50%;
      margin-left: -55px;
      height: 15px;
      font-size: 14px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      text-transform: uppercase;
      background: linear-gradient(to bottom right, #555 0%, #333 100%);
      cursor: default;
    }
  }

  .yellow {
    background: linear-gradient(to bottom right, #ffeb3b 0%, #fbc02d 100%);
    color: #ffb300;
  }

  .orange {
    background: linear-gradient(to bottom right, #ffc107 0%, #f57c00 100%);
    color: #f68401;
  }

  .pink {
    background: linear-gradient(to bottom right, #f48fb1 0%, #d81b60 100%);
    color: #dc306f;
  }

  .red {
    background: linear-gradient(to bottom right, #f4511e 0%, #b71c1c 100%);
    color: #c62828;
  }

  .purple {
    background: linear-gradient(to bottom right, #ab47bc 0%, #4527a0 100%);
    color: #7127a8;
  }

  .teal {
    background: linear-gradient(to bottom right, #4db6ac 0%, #00796b 100%);
    color: #34a297;
  }

  .blue {
    background: linear-gradient(to bottom right, #4fc3f7 0%, #2196f3 100%);
    color: #259af3;
  }

  .blue-dark {
    background: linear-gradient(to bottom right, #1976d2 0%, #283593 100%);
    color: #1c68c5;
  }

  .green {
    background: linear-gradient(to bottom right, #cddc39 0%, #8bc34a 100%);
    color: #7cb342;
  }

  .green-dark {
    background: linear-gradient(to bottom right, #4caf50 0%, #1b5e20 100%);
    color: #00944a;
  }

  .silver {
    background: linear-gradient(to bottom right, #e0e0e0 0%, #bdbdbd 100%);
    color: #9e9e9e;
  }

  .gold {
    background: linear-gradient(to bottom right, #e6ce6a 0%, #b7892b 100%);
    color: #b7892b;
  }
</style>

<script lang="ts">
  import { Route, Router } from 'svelte-routing';
  import Sell from "./lib/pages/Sell.svelte";
  import Result from './lib/pages/Result.svelte';
</script>

<main>
  <Router basepath="/quartz-calculator">
    <Route path="/" component={Sell} />
    <Route path="/venda" component={Sell} />
    <Route path="/resultado" component={Result} />
  </Router>
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    min-width: 100vw;
    box-sizing: border-box;
  }
</style>

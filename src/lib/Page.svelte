<div class="page-container">
  <slot name="header" />
  <div class="scrollable-body">
    <slot name="body" />
  </div>
  <slot name="footer" />
</div>

<style lang="scss">
  .page-container {
    display: grid;
    grid-template-rows: 50px 1fr 65px;
    row-gap: 1rem;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    padding: 1rem;
    box-sizing: border-box;

    .scrollable-body {
      max-height: calc(100vh - 4rem - 115px);
      overflow-y: auto;
    }
  }
</style>

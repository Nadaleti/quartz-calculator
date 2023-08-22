<div>
  <slot name="header" />
  <slot name="body" />
  <slot name="footer" />
</div>

<style lang="scss">
  div {
    display: grid;
    grid-template-rows: 0.1fr 1fr 0.1fr;
    row-gap: 1rem;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>

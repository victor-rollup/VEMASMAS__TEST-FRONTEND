<script lang="ts">
  export default {
    name: 'ADMINISTRATION_LAYOUT',
  };
</script>

<template>
  <CUSTOMIZABLE_LAYOUT HIDE_PRIMARY_SIDE_BAR SHOW_CONTROL_PANEL class="ADMINISTATION-LAYOUT" >
    <header class="ADMINISTATION-LAYOUT__HEADER" flex="row" bottom-shadow >
      <BRAND_SVG_LOGO class="ADMINISTATION-LAYOUT__HEADER-LOGO" />
    </header>
    <slot />
    <template #PrimarySideBar>
      <slot name="PrimarySideBar" />
    </template>
  </CUSTOMIZABLE_LAYOUT>
</template>

<style scoped>
  .ADMINISTATION-LAYOUT__HEADER {
    height: 4rem;
    padding-block: 0.5rem;
    padding-inline: 1.5rem;
    background-color: var(--bussiness-color__blue-primary);
  }
  .ADMINISTATION-LAYOUT__HEADER-LOGO {
    height: 100%;
  }
</style>

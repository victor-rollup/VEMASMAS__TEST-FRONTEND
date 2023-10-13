<script lang="ts">
  export default {
    name: 'FORM_FIELDSET_DETAILS',
    props: {
      DISABLED: Boolean,
      SUMMARY_TEXT: String,
    }
  }
</script>

<template>
  <details v-if="!DISABLED" flex="column">
    <summary>{{ SUMMARY_TEXT }}</summary>
    <fieldset flex="column">
      <slot />
    </fieldset>
  </details>
</template>

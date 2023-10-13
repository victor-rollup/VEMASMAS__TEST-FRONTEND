<script lang="ts">
  export default {
    name: 'INPUT_TYPE_BOOLEAN',
    props: {
      NAME: String,
      modelValue: [Boolean, String],
      modelModifiers: Object,
      DISPLAY_NAME: String,
    },
    emits: ['update:model-value', 'input'],
    methods: {
      onInput({ checked }: any) {
        this.$emit('input', checked)
        this.$emit('update:model-value', checked)
      },
    },
  };
</script>

<template>
  <INPUT_TYPE_DEFINITION
    v-bind="{
      NAME,
      TYPE: 'checkbox',
      modelValue,
      modelModifiers,
      DISPLAY_NAME,
      checked: modelValue,
    }"
    @input="onInput"
  />
</template>

<style>
  input[type='checkbox'] {
    appearance: none;
    width: 1.5rem;
    padding: 0rem;
    height: 1.5rem;
    border-radius: 0.25rem;
    outline: 0.125rem solid rgb(50 50 50 / 0.16);
  }
  input[type='checkbox']:checked {
    background: rgb(250 250 250 / 0.16);
    outline-color: transparent;
  }
</style>

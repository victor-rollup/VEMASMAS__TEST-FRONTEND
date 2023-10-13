<script lang="ts">
  export default {
    name: 'INPUT_TYPE_NUMBER',
    props: {
      NAME: String,
      DISPLAY_NAME: String,
      modelValue: [String, Number],
      modelModifiers: Object,
    },
    emits: ['update:model-value', 'input'],
    methods: {
      onInput({ value }: any) {
        const normalizedValue = Number(value);
        this.$emit('input', normalizedValue);
        this.$emit('update:model-value', normalizedValue);
      },
    },
  };
</script>

<template>
  <INPUT_TYPE_DEFINITION
    v-bind="{
      NAME,
      TYPE: 'number',
      DISPLAY_NAME,
      modelValue,
      modelModifiers
    }"
    @input="onInput"
  />
</template>

<style>
  input[type='number'] {
    text-align: center;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    display: none;
  }
</style>

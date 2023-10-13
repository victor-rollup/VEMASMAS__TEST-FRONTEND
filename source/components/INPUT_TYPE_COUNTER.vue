<script lang="ts">
  const COUNTER_STEP = 1
  export default {
    name: 'INPUT_TYPE_COUNTER',
    props: {
      NAME: String,
      DISPLAY_NAME: String,
      modelValue: [String, Number],
      modelModifiers: Object,
    },
    computed: {
      value() { return Number(this.modelValue) }
    },
    emits: ['input','update:model-value'],
    methods: {
      onInput(value : any) {
        this.$emit('input', value)
        this.$emit('update:model-value', value)
      },
      decrease() { this.onInput(this.value - COUNTER_STEP) },
      increase() { this.onInput(this.value + COUNTER_STEP) },
    },
  };
</script>

<template>
  <label for="INPUT_TYPE_COUNTER" flex="row" class="INPUT-COUNTER-WRAPPER">
    <button type="button" @click="decrease" class="INPUT-COUNTER__BUTTON">-</button>
    <INPUT_TYPE_NUMBER
      ref="COUNTER-DISPLAY"
      v-bind="{
        NAME,
        DISPLAY_NAME,
        modelValue,
        modelModifiers,
        ...$attrs,
      }"
      @input="onInput"
      class="INPUT-COUNTER__DISPLAY"
    />
    <button type="button" @click="increase" class="INPUT-COUNTER__BUTTON">+</button>
  </label>
</template>

<style scoped>
  .INPUT-COUNTER-WRAPPER {
    gap: 0.5rem;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    align-items: center;
    width: fit-content;
    border-radius: 0.5rem;
    background: rgb(0 0 0 / 24%);
  }
  .INPUT-COUNTER__DISPLAY {
    max-width: 6rem;
  }
  .INPUT-COUNTER__BUTTON {
    padding: 0rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: rgb(0 0 0 / 16%);
  }
</style>

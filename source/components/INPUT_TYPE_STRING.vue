<script lang="ts">
  export default {
    name: 'INPUT_TYPE_STRING',
    props: {
      NAME: String,
      LENGTH: [String, Number],
      DISPLAY_NAME: String,
      modelValue: String,
      modelModifiers: Object,
    },
    emits: ['update:model-value', 'input'],
    methods: {
      onInput({ value }: any) {
        this.$emit('input', value)
        this.$emit('update:model-value', value)
      },
    },
  };
</script>

<template>
  <INPUT_TYPE_DEFINITION
    v-bind="{
      NAME,
      MAXLENGTH: LENGTH,
      DISPLAY_NAME,
      modelValue,
      modelModifiers,
    }"
    @input="onInput"
  />
</template>

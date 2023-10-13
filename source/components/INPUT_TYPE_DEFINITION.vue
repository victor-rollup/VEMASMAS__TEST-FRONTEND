<script lang="ts">
  //-----------------------------------------------------------
  import { EMPTY_STRING } from '@/helpers/constants.helpers';
  import * as BEM from '@/helpers/bem.methodology.helper';
  import { notEmpty } from '@/helpers/text.validation.helpers';
  //-----------------------------------------------------------
  export const INPUT_TYPE_DEFINITION = 'INPUT_TYPE_DEFINITION';
  export const OPTIONAL_STRING = {
    type: String,
    default: EMPTY_STRING,
  };

  export default {
    name: INPUT_TYPE_DEFINITION,
    props: {
      NAME: OPTIONAL_STRING,
      modelValue: [String, Number, Boolean],
      modelModifiers: Object,
      DISPLAY_NAME: OPTIONAL_STRING,
    },
    computed: {
      hasName(): boolean {
        return notEmpty(this.NAME);
      },
      CLASS(): string {
        const block = BEM.Create(INPUT_TYPE_DEFINITION);
        if (!this.hasName) {
          return block;
        }
        const element = { child: this.NAME };
        const blockChild = BEM.Create(INPUT_TYPE_DEFINITION, element);
        return BEM.BlockUnion(block, blockChild);
      },
      PLACEHOLDER(): string {
        return this.DISPLAY_NAME;
      },
    },
    emits: ['update:model-value', 'input'],
    methods: {
      onInput({ target: input }: any) {
        this.$emit('input', input);
        this.$emit('update:model-value', input.value);
      },
    },
  };
</script>

<template>
  <label class="INPUT-WRAPPER">
    <input
      v-bind="{
        TYPE: 'text',
        NAME,
        CLASS,
        value: modelValue,
        PLACEHOLDER,
        ...$attrs,
      }"
      @input="onInput"
    />
  </label>
</template>

<style>
  input {
    width: -webkit-fill-available;
    height: 3.25rem;
    border-radius: 0.5rem;
    padding-inline: 1rem;
    border-color: transparent;
    border-bottom-color: black;
    background: rgb(0 0 0 / 25%);
  }
  input:read-only {
    outline: none;
    border-color: transparent;
  }
  input:invalid:not(:placeholder-shown) {
    border: 0.062rem solid darkred;
    outline: 0.062rem solid darkred;
  }

  .INPUT-WRAPPER::before {
    content: attr(placeholder);
    display: block;
  }
</style>

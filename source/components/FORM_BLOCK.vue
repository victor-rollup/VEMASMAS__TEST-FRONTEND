<script lang="ts">
  import Create from '@/helpers/bem.methodology.helper';
  export default {
    name: 'FORM_BLOCK',
    props: {
      NAME: {
        type: String,
        required: true,
      },
      ENPOINT_NAME: String,
      ENDPOINT_METHOD: String,
    },
    computed: {
      ID() {
        return this.NAME;
      },
      CLASS(): string {
        return Create('FORM-BLOCK');
      },
      ACTION() {
        return this.ENPOINT_NAME;
      },
      METHOD() {
        return this.ENDPOINT_METHOD;
      },
    },
    emits: ['submit'],
    methods: {
      onSubmit: function(event: SubmitEvent) {
        return this.$emit('submit', event)
      }
    }
  };
</script>

<template>
  <form
    flex="column"
    v-bind="{
      ID,
      CLASS,
      METHOD,
      ACTION,
    }"
    @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<style>
  form {
    gap: 1rem;
    max-width: 32rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgb(64 64 64 / 24%);
  }
</style>

<script lang="ts">
  import type { TProduct } from '@/backend/models';
  import { createProduct } from '@/backend/functions';
  import { ZERO, TRUE_BOOLEAN, EMPTY_STRING } from '@/helpers/constants.helpers';

  export default {
    name: 'INDEX-PAGE',
    methods: {
      onSubmit: async function () {
        debugger
        return await createProduct(this);
      },
    },
    data: function (): TProduct {
      return {
        name: EMPTY_STRING,
        weight: {
          minimum: ZERO,
          maximum: ZERO,
        },
        piecesPerBox: ZERO,
        isEnable: TRUE_BOOLEAN,
      };
    },
  };
</script>

<template>
  <ADMINISTRATION_LAYOUT class="ADMINISTRATION">
    <CUSTOMIZABLE_LAYOUT
      class="CREATE-PRODUCT"
      HIDE_PRIMARY_SIDE_BAR
      SHOW_SECONDARY_SIDE_BAR
    >
      <FORM_BLOCK
        NAME="CREATE-PRODUCT-FORM"
        class="CREATE-PRODUCT__FORM"
        @submit="onSubmit"
      >
        <INPUT_TYPE_STRING
          length="200"
          required
          class="CREATE-PRODUCT__NAME-INPUT"
          placeholder="Nombre del producto"
          v-model.trim="name"
          text-capitalize
        />
        <div
          flex="row"
          class="CREATE-PRODUCT__WEIGHT-INPUT-WRAPPER"
        >
          <INPUT_TYPE_NUMBER
            min="1.5"
            max="3.5"
            required
            step="any"
            class="CREATE-PRODUCT__MINIMUM-WEIGHT"
            placeholder="Peso mínimo"
            v-model="weight.minimum"
          />
          —
          <INPUT_TYPE_NUMBER
            min="1.5"
            max="3.5"
            required
            step="any"
            class="CREATE-PRODUCT__MAXIMUM-WEIGHT"
            placeholder="Peso máximo"
            v-model="weight.maximum"
          />
        </div>
        <INPUT_TYPE_BOOLEAN v-model="isEnable" />
        <INPUT_TYPE_COUNTER required v-model.number="piecesPerBox" min="2" max="4" />
        <button type="submit">Guardar</button>
      </FORM_BLOCK>
      <template #SecondarySideBar>
        <pre>{{ { name, weight, piecesPerBox, isEnable } }}</pre>
      </template>
    </CUSTOMIZABLE_LAYOUT>
  </ADMINISTRATION_LAYOUT>
</template>

<style scoped>
  .CREATE-PRODUCT {
    min-height: 100vh;
  }
  .CREATE-PRODUCT__MINIMUM-WEIGHT,
  .CREATE-PRODUCT__MAXIMUM-WEIGHT {
    max-width: 6rem;
    padding-inline: 0rem;
  }
  .CREATE-PRODUCT__WEIGHT-INPUT-WRAPPER {
    align-items: center;
    justify-content: space-between;
  }
  .CREATE-PRODUCT__NAME-INPUT input {
    text-transform: uppercase;
  }
</style>

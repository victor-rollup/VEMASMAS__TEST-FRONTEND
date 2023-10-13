<script lang="ts">
  //----------------------------------------------------------------------------------
  export default {
    name: 'CUSTOMIZABLE_LAYOUT',
    props: {
      SHOW_CONTROL_PANEL: Boolean,
      USE_CENTERED_LAYOUT: Boolean,
      SHOW_PANEL_BAR: Boolean,
      HIDE_STATUS_BAR: Boolean,
      SHOW_ACTIVITY_BAR: Boolean,
      HIDE_PRIMARY_SIDE_BAR: Boolean,
      SHOW_SECONDARY_SIDE_BAR: Boolean,
    },
    methods: {
      togglePrimarySideBar() {
        this.showPrimarySideBar = !this.showPrimarySideBar;
      },
    },
    data() {
      return {
        showPanelBar: this.SHOW_PANEL_BAR,
        showStatusBar: !this.HIDE_STATUS_BAR,
        showActivityBar: this.SHOW_ACTIVITY_BAR,
        useCenteredLayout: this.USE_CENTERED_LAYOUT,
        showPrimarySideBar: !this.HIDE_PRIMARY_SIDE_BAR,
        showSecondarySideBar: this.SHOW_SECONDARY_SIDE_BAR,
      };
    },
  };
  //----------------------------------------------------------------------------------
</script>

<template>
  <div
    flex="column"
    class="CUSTOMIZABLE-LAYOUT"
  >
    <header
      v-if="SHOW_CONTROL_PANEL"
      flex="row"
      layout-tag="Panel de Control"
      class="CUSTOMIZABLE-LAYOUT__CONTROL-PANEL"
    >
      <INPUT_TYPE_BOOLEAN
        flex="row"
        v-model="showPrimarySideBar"
        class="CUSTOMIZABLE-LAYOUT__CONTROL-PANEL-CHECKBOX"
      />
      <INPUT_TYPE_BOOLEAN
        flex="row"
        v-model="showSecondarySideBar"
        class="CUSTOMIZABLE-LAYOUT__CONTROL-PANEL-CHECKBOX"
      />
      <INPUT_TYPE_BOOLEAN
        flex="row"
        v-model="useCenteredLayout"
        class="CUSTOMIZABLE-LAYOUT__CONTROL-PANEL-CHECKBOX"
      />
      <INPUT_TYPE_BOOLEAN
        flex="row"
        v-model="showActivityBar"
        class="CUSTOMIZABLE-LAYOUT__CONTROL-PANEL-CHECKBOX"
      />
      <INPUT_TYPE_BOOLEAN
        flex="row"
        v-model="showPanelBar"
        class="CUSTOMIZABLE-LAYOUT__CONTROL-PANEL-CHECKBOX"
      />
      <INPUT_TYPE_BOOLEAN
        flex="row"
        v-model="showStatusBar"
        class="CUSTOMIZABLE-LAYOUT__CONTROL-PANEL-CHECKBOX"
      />
    </header>
    <div
      flex="column"
      class="CUSTOMIZABLE-LAYOUT__MAIN-WRAPPER"
    >
      <div
        flex="row"
        class="CUSTOMIZABLE-LAYOUT__WORKSPACE"
      >
        <aside
          v-if="showPrimarySideBar || showActivityBar"
          flex="row"
          class="CUSTOMIZABLE-LAYOUT__PRIMARY-SIDE-BAR"
        >
          <section
            v-if="showActivityBar"
            flex="column"
            layout-tag="Activity Bar"
            class="CUSTOMIZABLE-LAYOUT__ACTIVITY-BAR"
          >
            <slot name="ActivityBar" />
          </section>
          <section
            v-if="showPrimarySideBar"
            flex="column"
            layout-tag="Primary Side Bar"
            class="CUSTOMIZABLE-LAYOUT__PRIMARY-SIDE-BAR-CONTENT"
          >
            <slot name="PrimarySideBar" />
          </section>
        </aside>
        <main
          flex="column"
          class="CUSTOMIZABLE-LAYOUT__MAIN-CONTENT"
          layout-tag="Main Content"
          :centered-mode="useCenteredLayout"
        >
          <slot />
        </main>
        <aside
          v-if="showSecondarySideBar"
          flex="column"
          layout-tag="Secondary Side Bar"
          class="CUSTOMIZABLE-LAYOUT__SECONDARY-SIDE-BAR"
        >
          <slot name="SecondarySideBar" />
        </aside>
      </div>
      <div
        v-if="showPanelBar"
        flex="column"
        layout-tag="Panel de Opciones"
        class="CUSTOMIZABLE-LAYOUT__PANEL-BAR"
      >
        <slot name="PanelBar" />
      </div>
    </div>
    <footer
      v-if="showStatusBar"
      flex="row"
      layout-tag="Status Bar"
      class="CUSTOMIZABLE-LAYOUT__STATUS-BAR"
    >
      <slot name="StatusBar" />
    </footer>
  </div>
</template>

<style scoped>
  [layout-tag]::before {
    content: attr(layout-tag);
    display: block;
    opacity: 16%;
    padding: 0.5rem;
    font-size: 0.75rem;
    font-weight: lighter;
    /* display: none; */
  }
  .CUSTOMIZABLE-LAYOUT {
    min-height: inherit;
  }
  .CUSTOMIZABLE-LAYOUT__MAIN-WRAPPER {
    flex: 1 1 auto;
  }
  .CUSTOMIZABLE-LAYOUT__CONTROL-PANEL {
    gap: 0.5rem;
    padding: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--bussiness-color__white-primary);
    box-shadow: 0.125rem 0.125rem 0.25rem 0 rgb(0 0 0 / 16%);
  }
  .CUSTOMIZABLE-LAYOUT__WORKSPACE {
    flex: 1 1 auto;
    justify-content: space-between;
  }
  .CUSTOMIZABLE-LAYOUT__MAIN-CONTENT {
    width: 70vw;
    margin-inline: auto;
  }
  .CUSTOMIZABLE-LAYOUT__STATUS-BAR {
    border-block: 0.062rem solid rgb(50 50 50 / 16%);
  }
  .CUSTOMIZABLE-LAYOUT__PANEL-BAR {
    box-shadow: 0.125rem -0.125rem 0.25rem 0 rgb(0 0 0 / 25%);
  }
  .CUSTOMIZABLE-LAYOUT__ACTIVITY-BAR {
    width: 4rem;
    gap: 0.5rem;
    padding: 0.75rem;
    justify-content: space-between;
    box-shadow: 0.125rem 0.125rem 0.25rem 0
      var(--bussiness-color__black-primary--quarter-opacity);
  }
  .CUSTOMIZABLE-LAYOUT__PRIMARY-SIDE-BAR,
  .CUSTOMIZABLE-LAYOUT__SECONDARY-SIDE-BAR {
    min-width: 18rem;
    border-inline: 0.062rem solid rgb(50 50 50 / 16%);
  }
  .CUSTOMIZABLE-LAYOUT__ACTIVITY-BAR-SECTION {
    gap: inherit;
  }
  .CUSTOMIZABLE-LAYOUT__PRIMARY-SIDE-BAR-CONTENT {
    flex: 1 1 auto;
    padding: 0.5rem;
  }
  .CUSTOMIZABLE-LAYOUT__CONTROL-PANEL-CHECKBOX {
    border-radius: 0.25rem;
    outline: 0.062rem solid rgb(0 0 0 / 25%);
  }
  .CUSTOMIZABLE-LAYOUT__PRIMARY-SIDE-BAR:not(
      :has(.CUSTOMIZABLE-LAYOUT__PRIMARY-SIDE-BAR-CONTENT)
    ) {
    min-width: fit-content;
  }
  .CUSTOMIZABLE-LAYOUT__MAIN-CONTENT:not([centered-mode='true']) {
    flex: 1 1 auto;
    border-color: transparent;
  }
</style>

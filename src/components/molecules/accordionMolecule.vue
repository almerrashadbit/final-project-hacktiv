<template>
  <div class="row">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <buttonAtom
            button-class="accordion-button collapsed"
            button-type="button"
            button-data-bs-toggle="collapse"
            button-data-bs-target="#collapseOne"
            button-aria-expanded="false"
            button-aria-controls="collapseOne"
          >
            {{ accordionButtonText }}
          </buttonAtom>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import buttonAtom from '../atoms/buttonAtom.vue'

defineProps({
  accordionButtonText: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <buttonAtom
        button-class="accordion-button collapsed"
        button-type="button"
        button-data-bs-toggle="collapse"
        :button-data-bs-target="accordionTarget"
        button-aria-expanded="false"
        :button-aria-controls="accordionId"
      >
        {{ accordionButtonText }}
      </buttonAtom>
    </h2>
    <div :id="accordionId" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <slot></slot>
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
  },
  accordionTarget: {
    type: String
  },
  accordionId: {
    type: String
  }
})
</script>

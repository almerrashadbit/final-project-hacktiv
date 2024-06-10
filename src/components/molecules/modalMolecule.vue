<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ modalHeaderText }}</h1>
        </div>
        <div class="modal-body"><slot></slot></div>
        <div class="modal-footer">
          <linkAtom
            v-for="linkk in modalLink"
            :link-href="linkk.href"
            :class="linkk.class"
            :id="linkk.id"
            role="button"
            :data-bs-dismiss="linkk.dataBsDismiss"
            >{{ linkk.text }}</linkAtom
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import linkAtom from '../atoms/linkAtom.vue'

defineProps({
  modalHeaderText: {
    type: String,
    required: true
  },
  modalLink: {
    type: Array,
    required: true
  }
})
</script>

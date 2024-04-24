<template>
  <authTemplate
    :inputItems="formTemplateConfig.input"
    :linkForm="formTemplateConfig.link"
    :buttonForm="formTemplateConfig.button"
  >
    <h3>Sign into your account</h3>
  </authTemplate>
</template>

<script setup>
import formTemplateConfig from './formTemplateConfig'
import authTemplate from '../../components/templates/authTemplate.vue'
</script>
./formTemplateConfig

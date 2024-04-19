<template>
<authTemplate :inputItems="formInputList" :linkForm="formLinkList" btnFormSubmit="Login" classButton="btn btn-success btn-block btn-lg">
    <h3>Sign into your account</h3>
</authTemplate>
</template>

<script setup>
import formInputList from './formInputList';
import formLinkList from './formLinkList';
import inputForm from '../../components/organisms/inputForm.vue';
import authTemplate from '../../components/templates/authTemplate.vue'
</script>
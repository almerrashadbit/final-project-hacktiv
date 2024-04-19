<template>
<authTemplate :inputItems="formInputList" :linkForm="formLinkList" btnFormSubmit="Register" classButton="btn btn-success btn-block btn-lg">
    <h3>Register your account</h3>
</authTemplate>
</template>

<script setup>
import formInputList from './formInputList';
import authTemplate from '../../components/templates/authTemplate.vue'
import formLinkList from './formLinkList';
</script>
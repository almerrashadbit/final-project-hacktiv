<script setup>
import { RouterLink, RouterView } from 'vue-router'
import buttonAtom from './components/atoms/buttonAtom.vue'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <buttonAtom msg="ALmer Rashad" />
        <buttonAtom msg="Rashad Almer" />
      </nav>
    </div>
  </header> -->

  <RouterView />


</template>

<style scoped></style>

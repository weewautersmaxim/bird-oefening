<script setup lang="ts">
import AppHeader from "./components/Appheader.vue"
import Appfooter from "./components/Appfooter.vue"
</script>

<template>
  <div>
    <AppHeader class="max-w-4xl mx-auto" />
    <RouterView class="max-w-4xl mx-auto" />
    <Appfooter class="max-w-4xl mx-auto" />
  </div>
</template>

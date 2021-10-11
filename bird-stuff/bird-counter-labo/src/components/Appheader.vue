<script setup lang="ts">
import { userComposable } from "../utils/userComposable"

const { getCurrentUser } = userComposable()
const user = getCurrentUser()
</script>

<template>
  <header class="flex items-center justify-between p-6">
    <RouterLink to="/">
      <h1 class="text-xl font-semibold">birds counter &trade;</h1>
    </RouterLink>

    <nav class="space-x-6">
      <RouterLink exact-active-class="opacity-30" to="/">Birds</RouterLink>

      <RouterLink exact-active-class="opacity-30" to="/realtime"
        >realtime</RouterLink
      >
      <RouterLink exact-active-class="opacity-30" to="/observations"
        >Observation</RouterLink
      >
    </nav>
    <p class="font-bold ml-12 border-gray-800 border-b-2">{{ user.name }}</p>
  </header>
</template>

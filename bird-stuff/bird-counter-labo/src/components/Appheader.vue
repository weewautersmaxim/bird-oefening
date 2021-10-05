<script setup lang="ts"></script>

<template>
  <header class="flex items-center justify-between p-6">
    <RouterLink to="/">
      <h1 class="text-xl font-semibold">birds counter &trade;</h1>
    </RouterLink>

    <nav class="space-x-6">
      <RouterLink exact-active-class="opacity-50" to="/">Birds</RouterLink>
      <RouterLink exact-active-class="opacity-50" to="/realtime"
        >realtime
      </RouterLink>
      <RouterLink exact-active-class="opacity-50" to="/history"
        >history</RouterLink
      >
    </nav>
  </header>
</template>

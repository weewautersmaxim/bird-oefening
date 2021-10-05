@
<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  setup() {
    const route = useRoute()
    const birdId = ref<string | undefined>(
      route.params.birdId ? (route.params.birdId as string) : undefined,
    )
    return {
      birdId,
    }
  },
})
</script>

<template>
  <h2>{{ birdId }}</h2>
</template>

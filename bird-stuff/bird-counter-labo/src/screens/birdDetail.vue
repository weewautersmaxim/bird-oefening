@
<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRoute } from "vue-router"
import { useNetwork } from "../utils/networkComposable"

export default defineComponent({
  setup() {
    const route = useRoute()
    const { get } = useNetwork()
    const birdId = ref<string | undefined>(
      route.params.birdId ? (route.params.birdId as string) : undefined,
    )

    async function getCurrentBird() {
      const data = await get(`/bird/id/${birdId.value}`)
    }

    return {
      birdId,
    }
  },
})
</script>

<template>
  <div class="absolute inset-0 bg-red-400 bg-opacity-25">
    <div
      class="
        relative
        z-0
        backdrop-filter backdrop-blur-sm
        h-screen
        w-full
        overflow-y-auto
      "
    >
      <div
        class="
          relative
          z-10
          my-6
          max-w-2xl
          mx-auto
          bg-white
          shadow-sm
          rounded-lg
          p-6
          text-left
        "
      ></div>
    </div>
    <h2>{{ birdId }}</h2>
  </div>
</template>

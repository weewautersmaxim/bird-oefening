<script lang="ts">
import { defineComponent, onMounted, onUnmounted, Ref, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

import { useNetwork } from "../utils/networkComposable"
import Bird from "../models/Bird"

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { get } = useNetwork()

    const birdId = ref<string | undefined>(
      route.params.birdId ? (route.params.birdId as string) : undefined,
    )

    const notFound: Ref<Boolean> = ref(false)

    const bird = ref<Bird>()

    async function getCurrentBird() {
      const data = await get(`bird/${birdId.value}`).catch(err => {
        notFound.value = true
      })
      bird.value = data
      console.log(bird.value)
    }

    function goToOverview() {
      router.push("/")
    }

    function handleEscapePress(e: KeyboardEvent) {
      if (e.code === "Escape") {
        goToOverview()
      }
    }

    onMounted(() => {
      document.addEventListener("keyup", handleEscapePress)
    })

    onUnmounted(() => {
      document.removeEventListener("keyup", handleEscapePress)
    })

    getCurrentBird()
    return {
      birdId,
      bird,
      notFound,
      goToOverview,
    }
  },
})
</script>

<template>
  <div class="fixed inset-0">
    <div
      @click.self="goToOverview"
      class="
        relative
        z-0
        backdrop-blur-sm backdrop-filter
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
      >
        <div v-if="bird && !notFound">
          <header class="flex justify-between items-center">
            <h1 class="text-3xl font-bold mb-3">{{ bird?.name }}</h1>

            <RouterLink
              to="/"
              class="
                rounded-full
                p-1
                -mr-1
                focus:outline-none focus:ring
                hover:bg-gray-100
              "
            >
              <svg
                class="stroke-current text-gray-800 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="arcs"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line></svg
            ></RouterLink>
          </header>
          <img
            class="w-full rounded-md mb-3"
            :src="bird.image"
            :alt="`Een foto van een ${bird.name}`"
          />
          <p class="text-lg font-semibold">{{ bird.short }}</p>

          <h2 class="text-xl font-semibold mb-3 mt-6">Herkennen</h2>
          <ul class="list-disc list-item pl-4">
            <li v-for="r of bird.recon" :key="r">
              <p>{{ r }}</p>
            </li>
          </ul>
          <h2 class="text-xl font-semibold mb-3 mt-6">Voedsel</h2>
          <p>{{ bird.food.description }}</p>
          <p>{{ bird.food.what }}</p>
          <p>{{ bird.food.where }}</p>

          <h2 class="text-xl font-semibold mb-3 mt-6">Bekijken</h2>
          <p>{{ bird.see }}</p>
        </div>

        <div class="animated-pulse" v-else>loading...</div>
      </div>
    </div>
  </div>
</template>

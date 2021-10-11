<script lang="ts">
import { defineComponent, ref } from "vue"
import { useNetwork } from "../utils/networkComposable"
export default defineComponent({
  setup() {
    const { get } = useNetwork()
    const birds = ref<any>()

    async function getAllBirds() {
      const data = await get("bird/all")
      birds.value = data
    }
    getAllBirds()
    return {
      birds,
    }
  },
})
</script>
<template>
  <div class="max-w-4xl mx-auto grid md:grid-cols-4 gap-6 sm:grid-cols-2">
    <RouterLink
      :to="`/${b.id}`"
      class="shadow-md rounded cursor-pointer"
      v-for="b of birds"
      :key="b.id"
    >
      <header class="flex items-center">
        <h2 class="p-3 text-xl font-semibold">
          {{ b.name }}
        </h2>
        <button
          class="
            flex
            items-center
            justify-center
            rounded-full
            p-2
            bg-none
            hover:bg-gray-100 hover:text-gray-700
            text-gray-300
            space-x-3
          "
        >
          <!-- <span>{{ b.birdObservations.lenght }}</span> we have no observations in backend-->
          <svg
            class="w-4 h-4 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
      </header>
      <img :src="b.image" :alt="`${b.name}`" />
    </RouterLink>
  </div>
</template>

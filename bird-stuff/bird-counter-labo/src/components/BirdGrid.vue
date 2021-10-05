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
  <div class="max-w-4xl mx-auto grid grid-cols-4 gap-6">
    <div class="shadow-md rounded" v-for="b of birds" :key="b.id">
      <h2 class="p-3 text-xl font-semibold">
        {{ b.name }}
      </h2>
      <img :src="b.image" :alt="`${b.name}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from "vue"
import {
  RouteLocation,
  RouteLocationNormalizedLoaded,
  useRoute,
} from "vue-router"
import BirdGrids from "../components/BirdGrid.vue"

export default defineComponent({
  components: { BirdGrids },

  setup() {
    const route: RouteLocationNormalizedLoaded = useRoute()

    console.log({ route })

    //first time
    const detailVisible: Ref<Boolean> = ref(route.matched.length > 1)
    toggleMakePageFixed(detailVisible.value)

    // console.log("on detail?", detailVisible.value)

    //keep track of changing route
    watch(route, (routeUpdate: RouteLocation) => {
      detailVisible.value = routeUpdate.matched.length > 1
      toggleMakePageFixed(detailVisible.value)
    })

    function toggleMakePageFixed(makeFixed: Boolean) {
      if (makeFixed) {
        //uitzonderlijk dat we de dom rechtstreeks aanspreken, niet doen tijdens project. kan buis zijn?
        document.querySelector("body")?.classList.add("fixed")
        return
      }
      document.querySelector("body")?.classList.remove("fixed")
      return
    }
    return {}
  },
})
</script>

<template>
  <div>
    <h1>birds</h1>
    <div>
      <RouterView></RouterView>
    </div>
    <BirdGrids />
  </div>
</template>

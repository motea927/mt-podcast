<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <ThePlayer v-if="currentEpisode" :currentEpisode="currentEpisode" />
</template>

<script>
// Components
import ThePlayer from '@/components/common/ThePlayer/ThePlayer.vue'

// Modules
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export default {
  components: {
    ThePlayer,
  },
  setup() {
    const store = useStore()

    const currentEpisode = computed(() => {
      return store.state.currentEpisode
    })

    return { currentEpisode }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

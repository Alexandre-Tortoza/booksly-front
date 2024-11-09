<template>
  <!-- <div class="p-4">
    <span> [{{ appStore.appLayout }}] - é Layout de APP ? </span>
    <br />
    <span>[{{ appStore.userLogin }}] - Precisa de Login / está Logado ? </span>
  </div> -->
  <layoutHeader v-if="appStore.appLayout" />
  <div class="py-4 min-h-screen">
    <RouterView />
  </div>
  <LayoutFooter v-if="appStore.appLayout" />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useAppStore } from './stores/app.js'
import layoutHeader from './components/layout/LayoutHeader.vue'
import LayoutFooter from './components/layout/LayoutFooter.vue'

const appStore = useAppStore()
</script>

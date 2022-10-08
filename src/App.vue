<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import Main from '@/components/Main.vue'

const showAside: Ref<boolean> = ref(false)

const onBurgerButtonClick = (): void => {
 showAside.value = !showAside.value
}
</script>

<template>
  <Header @burger-button-click="onBurgerButtonClick" />
  <AsideMenu :class="{'hidden': !showAside}" />
  <Main />
</template>
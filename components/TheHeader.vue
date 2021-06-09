<template>
  <header class="flex items-center justify-between p-8">
    <NuxtLink to="/">
      <!-- <img src="~/assets/new-logo.png" alt="logo" class="h-12" /> -->
      <CssLogo />
    </NuxtLink>
    <nav class="flex justify-end space-x-8">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/resume">Resume</NuxtLink>
    </nav>
  </header>
</template>

<script>
import CssLogo from '@/components/CssLogo.vue'
export default {
  name: 'TheHeader',
  components: {
    CssLogo,
  },
}
</script>

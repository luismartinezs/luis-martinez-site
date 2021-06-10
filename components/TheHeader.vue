<template>
  <header class="container flex items-center justify-between p-4 mx-auto">
    <NuxtLink to="/">
      <!-- <img src="~/assets/new-logo.png" alt="logo" class="h-12" /> -->
      <CssLogo />
    </NuxtLink>
    <nav class="flex justify-end space-x-8">
      <NuxtLink
        to="/"
        class="text-gray-700 link link-primary"
        :class="[$route.name === 'index' ? 'underline' : '']"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-gray-700 link link-primary"
        :class="[$route.name === 'About' ? 'underline' : '']"
        >About</NuxtLink
      >
      <NuxtLink
        to="/resume"
        class="text-gray-700 link link-primary"
        :class="[$route.name === 'Resume' ? 'underline' : '']"
        >Resume</NuxtLink
      >
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

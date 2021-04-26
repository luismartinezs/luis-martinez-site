<template>
  <header class="p-8 flex justify-between items-center">
    <NuxtLink to="/">
      <img src="~/assets/logo.png" alt="logo" />
    </NuxtLink>
    <nav class="flex justify-end space-x-8">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/resume">Resume</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

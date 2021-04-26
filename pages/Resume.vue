<template>
  <div class="container mx-auto px-4 prose prose-blue">
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  name: 'Article',
  async asyncData({ $content }) {
    const page = await $content(`resume`).fetch()

    return {
      page,
    }
  },
}
</script>

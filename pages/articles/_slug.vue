<template>
  <div class="container mx-auto px-4 prose prose-blue">
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  name: 'Article',
  async asyncData({ params, $content }) {
    const article = await $content(`articles/${params.slug}`).fetch()

    return {
      article,
    }
  },
}
</script>

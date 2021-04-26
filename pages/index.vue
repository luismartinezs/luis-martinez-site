<template>
  <div class="container mx-auto px-4 prose">
    <ArticleLinkBox
      v-for="article in articles"
      :key="article.slug"
      :article="article"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return {
      articles,
    }
  },
}
</script>

<template>
  <NuxtLink :to="`/articles/${article.slug}`">
    <h2>{{ article.title }}</h2>
    <p>{{ article.description }}</p>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ArticleLinkBox',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

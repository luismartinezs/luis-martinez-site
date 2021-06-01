<template>
  <NuxtLink :to="`/blog/${post.slug}`">
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
  </NuxtLink>
</template>

<script>
export default {
  name: 'BlogpostLinkBox',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

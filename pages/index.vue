<template>
  <div class="container px-4 mx-auto prose">
    <BlogpostLinkBox v-for="post in blog" :key="post.slug" :post="post" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $content }) {
    const blog = await $content('blog').fetch()

    return {
      blog,
    }
  },
}
</script>

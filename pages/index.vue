<template>
  <div class="container px-4 mx-auto prose">
    <BlogpostLinkBox
      v-for="post in sortedPosts"
      :key="post.slug"
      :post="post"
    />
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
  computed: {
    sortedPosts() {
      if (this.blog.length) {
        return [...this.blog].sort((a, b) => {
          return Date.parse(b.createdAt) - Date.parse(a.createdAt)
        })
      } else {
        return this.blog
      }
    },
  },
}
</script>

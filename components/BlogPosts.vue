<template>
  <WidthWrapper width="text">
    <h2 class="text-3xl font-semibold text-gray-800">Blog posts</h2>
    <div class="mt-6">
      <BlogpostLinkBox
        v-for="post in sortedPosts"
        :key="post.slug"
        :post="post"
      />
    </div>
  </WidthWrapper>
</template>

<script>
export default {
  name: 'BlogPosts',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sortedPosts() {
      if (this.posts.length) {
        return [...this.posts].sort((a, b) => {
          return Date.parse(b.createdAt) - Date.parse(a.createdAt)
        })
      } else {
        return this.posts
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>

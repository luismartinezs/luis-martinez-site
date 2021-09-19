<template>
  <div v-if="!$fetchState.pending" class="container px-4 mx-auto">
    <BlogPosts :posts="blog" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      blog: []
    }
  },
  // async asyncData({ $content }) {
  //   const blog = await $content('blog').fetch()

  //   return {
  //     blog,
  //   }
  // },
  async fetch() {
    this.blog = await this.$content('blog').fetch()
  }
}
</script>

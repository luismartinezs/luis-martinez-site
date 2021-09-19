<template>
  <div class="container px-4 mx-auto prose prose-blue">
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  name: 'Blogpost',
  async asyncData({ params, $content }) {
    const post = await $content(`blog/${params.slug}`).fetch()

    return {
      post
    }
  }
}
</script>

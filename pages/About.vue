<template>
  <div class="container px-4 mx-auto prose prose-blue">
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  name: 'About',
  async asyncData({ params, $content }) {
    const page = await $content(`about`).fetch()

    return {
      page,
    }
  },
  head: {
    title: 'About - Luis Martinez Web Developer',
  },
}
</script>

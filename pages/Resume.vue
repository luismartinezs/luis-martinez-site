<template>
  <div class="container px-4 mx-auto prose prose-blue">
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  name: 'Resume',
  async asyncData({ $content }) {
    const page = await $content(`resume`).fetch()

    return {
      page,
    }
  },
  head: {
    title: 'Resume - Luis Martinez Web Developer',
  },
}
</script>

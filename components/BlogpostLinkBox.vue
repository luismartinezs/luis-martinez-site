<template>
  <div class="mt-2">
    <NuxtLink
      :to="`/blog/${post.slug}`"
      class="text-gray-700 link link-primary"
    >
      <span>&#10148; {{ title }}</span>
    </NuxtLink>
  </div>
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
  computed: {
    title() {
      if (this.post.title) {
        return this.post.title.split('- Luis')[0].trim()
      }
      return ''
    },
  },
}
</script>

<template>
  <NuxtImg provider="cloudinary" :src="`luis-martinez/${path}`" />
</template>

<script>
export default {
  name: 'BaseImg',
  props: {
    path: {
      type: String,
      required: true,
    },
  },
}
</script>

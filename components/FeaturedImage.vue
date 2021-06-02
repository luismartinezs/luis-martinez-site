<template>
  <WidthWrapper width="block" no-padding>
    <NuxtImg provider="cloudinary" :src="`luis-martinez/${path}`" />
  </WidthWrapper>
</template>

<script>
import WidthWrapper from '@/components/WidthWrapper.vue'

export default {
  name: 'FeaturedImage',
  components: { WidthWrapper },
  props: {
    path: {
      type: String,
      required: true,
    },
  },
}
</script>

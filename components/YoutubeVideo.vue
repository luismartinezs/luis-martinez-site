<template>
  <ClientOnly>
    <!-- Center video and limit its max width -->
    <div class="max-w-3xl mx-auto">
      <div class="relative">
        <iframe
          width="560"
          height="315"
          :src="videoUrl"
          :title="caption"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="mt-2 leading-loose prose md:prose-lg md:leading-normal prose-blue"
      >
        <caption class="block text-left text-sm text-center text-gray-800">
          {{
            caption
          }}
        </caption>
      </div>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'YoutubeVideo',
  props: {
    youtubeId: {
      type: String,
      required: true,
    },
    timestamp: {
      type: [String, Number],
      default: null,
    },
    caption: {
      type: String,
      default: '',
    },
  },
  computed: {
    videoUrl() {
      const baseUrl = `https://www.youtube-nocookie.com/embed/${this.youtubeId}`
      const baseQueryParams =
        'autoplay=0&amp;cc_load_policy=1&amp;cc_lang_pref=nl&amp;disablekb=1&amp;rel=0'
      const queryParams = this.timestamp
        ? `start=${this.timestamp}&${baseQueryParams}`
        : baseQueryParams

      return `${baseUrl}?${queryParams}`
    },
  },
}
</script>

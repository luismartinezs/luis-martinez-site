<template>
  <div class="h-full mx-auto width-wrapper" :class="widthClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WidthWrapper',
  props: {
    width: {
      type: String,
      default: 'block',
      validator: (value) => ['text', 'block', 'button'].includes(value),
    },
    hasWidth: {
      type: Boolean,
      default: true,
    },
    // If nesting this component inside itself, set this to true
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    widthClass() {
      let widthClass = ''

      if (this.hasWidth) {
        const widthMap = {
          text: 'max-w-prose',
          block: 'max-w-5xl',
          button: 'max-w-sm sm:max-w-max',
        }

        widthClass = widthMap[this.width]
        if (!this.noPadding) {
          const paddingMap = {
            text: 'px-4 sm:px-6 md:px-0',
            block: 'px-4 sm:px-6 lg:px-8 xl:px-0',
            button: '',
          }

          widthClass += ` ${paddingMap[this.width]}`
        }
      }

      return widthClass
    },
  },
}
</script>

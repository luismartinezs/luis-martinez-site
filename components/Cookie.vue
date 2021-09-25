
<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="z-50 fixed bottom-0 bg-indigo-500 text-white w-full"
    >
      <div class="p-4">
        <div class="flex justify-center items-center space-x-2">
          <InfoIcon class="h-8 w-8 min-w-max" />
          <div class="flex-grow">
            <div>{{ message }}</div>
          </div>
          <div class="flex-shrink flex justify-end">
            <button
              class="
                py-1
                px-3
                rounded
                text-gray-200
                bg-gray-900
                hover:bg-gray-800
              "
              @click="accept"
            >
              {{ buttonTextAccept }}
            </button>
            <button class="py-1 px-3 hover:text-indigo-100" @click="deny">
              {{ buttonTextDeny }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import InfoIcon from '~/components/icons/InfoIcon.vue'
export default {
  name: 'CookieMessage',
  components: { InfoIcon },
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Accept'
    },
    buttonTextDeny: {
      type: String,
      default: 'Deny'
    },
    message: {
      type: String,
      default:
        'We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies.'
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', true)
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>

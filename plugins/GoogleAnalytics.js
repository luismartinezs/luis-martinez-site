import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

const getGDPR = localStorage.getItem('GDPR:accepted')

if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
  Vue.use(vueAnalytics, {
    id: 'UA-141677877-2',
    disabled: false,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  })
} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
  Vue.use(vueAnalytics, {
    id: 'UA-141677877-2',
    disabled: true,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  })
}

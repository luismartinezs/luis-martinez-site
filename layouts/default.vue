<template>
  <div class="flex flex-col justify-between h-screen">
    <client-only>
      <Cookie
        buttonTextAccept="ACCEPT"
        buttonTextDeny="DENY"
        message="I use cookies for Google Analytics. By continuing to browse this site, you consent to this."
      />
    </client-only>
    <div>
      <div class="flex h-1">
        <div class="flex-1 h-full bg-indigo-500" />
        <div class="flex-1 h-full bg-green-500" />
      </div>
      <TheHeader />
      <main class="w-full mx-auto mt-6">
        <Nuxt />
      </main>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import Cookie from '@/components/Cookie.vue'
export default {
  components: {
    Cookie
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

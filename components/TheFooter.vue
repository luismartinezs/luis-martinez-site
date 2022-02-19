<template>
  <footer class="w-screen text-gray-600 bg-gray-200 body-font">
    <div
      class="container flex flex-col items-center px-5 py-4 mx-auto sm:flex-row"
    >
      {{ new Date().getFullYear() }} Luis Martinez
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped></style>

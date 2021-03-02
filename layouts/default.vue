<template>
  <div id="layout" :style="`background-image: url(${bgImg})`">
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    bgImg() {
      return this.$config.status === true
        ? 'https://cuomoresign.b-cdn.net/cuomo-happy.jpg'
        : 'https://cuomoresign.b-cdn.net/cuomo-sad.jpg'
    }
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
  width: 100vw;
  background-color: #000;
}

#layout {
  height: 100vh;
  width: 100vw;
  background-color: #000;
  background-position: center;
  background-origin: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

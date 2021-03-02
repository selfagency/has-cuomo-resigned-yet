<template>
  <div class="wrapper">
    <div class="status animate fadeInDown">
      {{ $config.status ? 'Yes.' : 'No.' }}
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  @apply flex flex-col items-center justify-center h-screen w-screen p-20;

  .status {
    @apply text-center text-white;

    animation-delay: 1.5s;
    font-family: Fraunces, serif;
    font-weight: 900;
    font-size: 9em;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
  }
}
</style>

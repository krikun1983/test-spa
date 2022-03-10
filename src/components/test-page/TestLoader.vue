<template>
  <div class="loader">
    <h3 class="loader__heading">Обработка результатов</h3>
    <my-loader />
    <p class="loader__text">
      Определение стиля мышления...............
      ................................................................
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  @include flex-column-top();
  min-height: 60vw;
  font-family: "PT Serif", serif;
  font-weight: 400;
  letter-spacing: $spacing-m;
  color: $white;

  &__heading {
    margin-bottom: 10vw;
    width: 70%;
    font-weight: inherit;
    font-size: 8vw;
    line-height: 1.2;
    text-align: center;
  }
  &__text {
    margin-top: 8vw;
    padding: 0 10vw;
    font-size: 4.3vw;
    line-height: 1.2;
    text-align: justify;
    word-wrap: break-word;
  }
}
</style>

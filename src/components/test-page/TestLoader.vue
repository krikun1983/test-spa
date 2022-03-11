<template>
  <div class="loader">
    <h3 class="loader__heading">Обработка результатов</h3>
    <my-loader />
    <p class="loader__text">
      Определение стиля мышления...........
      ........................................................
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

  @include media-md {
    @include flex-column-center();
  }

  &__heading {
    margin-bottom: 10vw;
    width: 70%;
    font-weight: inherit;
    font-size: 8vw;
    line-height: 1.2;
    text-align: center;

    @include media-m {
      font-size: 6vw;
    }
    @include media-md {
      margin-top: 30px;
      font-size: 28px;
    }
  }
  &__text {
    margin-top: 8vw;
    width: 95%;
    padding: 0 10vw;
    font-size: 4.3vw;
    line-height: 1.2;
    text-align: center;
    overflow-x: auto;
    word-wrap: break-word;

    @include media-m {
      font-size: 3.3vw;
    }
    @include media-md {
      width: 60%;
      font-size: 26px;
      text-align: center;
    }
  }
}
</style>

<template>
  <section class="main-about" id="about">
    <div class="main-about__layer-color">
      <p class="main-about__text">
        Профессиональный <br />IQ-тест позволяет не только определить
        коэффициент вашего интеллекта, но и выработать список рекомендаций для
        повышения этого показателя.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-about {
  max-width: $media-xl;
  margin: 0 auto;
  height: calc(100vw * 1.06);
  background-image: url("@/assets/img/about_bg.webp");
  background-repeat: no-repeat;
  background-color: #18356f;
  background-position: center center;
  background-size: cover;

  @include media-m {
    height: calc(70vw * 1.06);
  }
  @include media-md {
    height: 320px;
  }

  &__layer-color {
    @include flex-column-center();
    height: 100%;
    background-image: radial-gradient(
      circle,
      #2950c2 0%,
      rgba(38, 91, 199, 0.96) 40.63%,
      rgba(39, 98, 187, 0) 85.42%
    );
    padding: 0 11%;

    @include media-md {
      padding: 0 8%;
    }
  }

  &__text {
    position: relative;
    font-family: "Yeseva One", serif;
    font-weight: 400;
    font-size: 5.5vw;
    line-height: 1.3;
    text-align: center;
    letter-spacing: $spacing-m;
    color: $white;

    @include media-m {
      font-size: 4.5vw;
    }
    @include media-md {
      font-size: 24px;
    }
  }

  &__text::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -4%;
    width: 20%;
    height: 12%;
    background-image: url("@/assets/img/bracket_left.svg");
    background-repeat: no-repeat;
    background-size: contain;

    @include media-md {
      top: -12%;
      left: 2%;
    }
  }

  &__text::after {
    content: "";
    position: absolute;
    bottom: -20%;
    right: -4%;
    width: 20%;
    height: 12%;
    background-image: url("@/assets/img/bracket_right.svg");
    background-repeat: no-repeat;
    background-size: contain;

    @include media-m {
      right: -12%;
    }
    @include media-md {
      bottom: -18%;
      right: -18%;
    }
  }
}
</style>

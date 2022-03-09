<template>
  <section class="about-test" id="about">
    <div class="container__layer">
      <p class="about-test__text">
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
.about-test {
  max-width: $desktop-xl;
  height: 339px;
  background-image: url("@/assets/img/about_bg.webp");
  background-repeat: no-repeat;
  background-color: #18356f;
  background-position: center center;
  background-size: cover;

  @include xss {
    height: 345;
  }
  @include xs {
    height: 350px;
  }
  @include sm {
    height: 420px;
  }
  @include m {
    height: 440px;
  }

  .container__layer {
    @include flex-column-center();
    height: 100%;
    background-image: radial-gradient(
      circle,
      #2950c2 0%,
      rgba(38, 91, 199, 0.96) 40.63%,
      rgba(39, 98, 187, 0) 85.42%
    );
    padding: 0 11%;
  }

  &__text {
    position: relative;
    color: $white;
    font-family: "Yeseva One", serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: $spacing-m;

    @include xss {
      font-size: 19px;
      line-height: 24px;
    }
    @include sm {
      font-size: 22px;
      line-height: 28px;
    }
  }

  &__text::before {
    content: "";
    position: absolute;
    top: -40px;
    left: -12px;
    width: 23px;
    height: 22.36px;
    background-image: url("@/assets/img/bracket_left.svg");
    background-repeat: no-repeat;
    background-size: contain;

    @include xss {
      width: 24px;
      height: 24px;
    }
    @include sm {
      width: 26px;
      height: 26px;
    }
  }

  &__text::after {
    content: "";
    position: absolute;
    bottom: -40px;
    right: -12px;
    width: 23px;
    height: 22.36px;
    background-image: url("@/assets/img/bracket_right.svg");
    background-repeat: no-repeat;
    background-size: contain;

    @include xss {
      width: 24px;
      height: 24px;
    }
    @include sm {
      width: 26px;
      height: 26px;
    }
  }
}
</style>

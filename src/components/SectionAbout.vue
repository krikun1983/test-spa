<template>
  <section class="about-test">
    <div class="container">
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
  min-height: 339px;
  background-image: url("@/assets/img/about_bg.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  .container {
    width: 100%;
    min-height: 339px;
    background-image: radial-gradient(
      circle,
      #2950c2 0%,
      rgba(38, 91, 199, 0.96) 40.63%,
      rgba(39, 98, 187, 0) 85.42%
    );
    padding: 83px 36px 0;
  }

  &__text {
    position: relative;
    color: $white;
    font-family: "Yeseva One", serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: calc(1em / 100 * 5);
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
  }

  &__text::after {
    content: "";
    position: absolute;
    bottom: -16px;
    right: -8px;
    width: 23px;
    height: 22.36px;
    background-image: url("@/assets/img/bracket_right.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>

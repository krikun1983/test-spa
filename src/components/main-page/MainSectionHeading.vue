<template>
  <section class="main-heading">
    <div class="main-heading__top">
      <h3>Пройдите точный и быстрый</h3>
      <h1>Тест <span>на определение IQ</span></h1>
    </div>
    <div class="main-heading__middle">
      <img src="@/assets/img/brain_icon-small.webp" alt="logo" />
    </div>
    <div class="main-heading__bottom">
      <my-button class="btn-active" @click="$router.push('/test/1')">
        Пройти тест
      </my-button>
      <p>
        <span>И получите рекомендации</span>
        <span>по развитию своего интеллекта</span>
        <span class="color-default">и улучшению финансового</span>
        благосостояния и личной жизни
      </p>
      <a href="#about" class="main-heading__bottom-link">
        <img
          src="@/assets/img/more_btn.svg"
          alt="more arrow"
          width="16"
          height="16"
        />
        <span>Подробнее</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-heading {
  @include flex-column-between();
  margin: 0 auto;
  padding: 9% 6% 4%;
  max-width: $media-xl;
  min-height: 522px;
  color: $white;

  &__top {
    @include flex-column-center();

    h3 {
      margin-bottom: 5%;
      font-family: "PT Serif", serif;
      font-weight: 400;
      font-size: 6vw;
      line-height: 1.22;
      text-align: center;
      letter-spacing: $spacing-m;
    }

    h1 {
      font-family: "Yeseva One", serif;
      font-weight: 400;
      font-size: 10vw;
      line-height: 1.14;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: $spacing-s;
      color: $accent;
    }
  }

  &__middle {
    @include flex-center();
    width: 100%;

    img {
      position: relative;
      right: 2.6vw;
      bottom: 3.2vw;
      width: 54%;
    }
  }

  &__bottom {
    @include flex-column-center();

    p {
      margin-top: 8%;
      font-family: "PT Serif", serif;
      font-weight: bold;
      font-size: 5.3vw;
      line-height: 1.12;
      text-align: center;
      letter-spacing: $spacing-m;
    }

    span {
      display: inline-block;
      width: 100%;
      color: $accent;
    }

    .color-default {
      color: $white;
    }

    &-link {
      @include flex-column-center();
      margin-top: 5%;
      cursor: pointer;

      img {
        width: 5vw;
        height: 5vw;
      }

      span {
        margin-top: 8%;
        font-size: 2.6vw;
        line-height: 1.4;
        letter-spacing: $spacing-m;
        color: $white;
        text-decoration: none;
      }
    }
  }
}
</style>

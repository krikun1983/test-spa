<template>
  <section class="main-more">
    <div class="main-more__layer-color">
      <p class="main-more__text">
        Также по результатам теста <span>вы получите</span> подробные
        <span>советы</span> по определению наиболее перспективной
        <span>для вашего типа </span>
        <b>интеллекта</b>
        <span> сферы деятельности</span>, <span></span> которая принесет вам
        скорейший финансовый результат.
      </p>
      <img src="@/assets/img/brain_areas-small.webp" alt="brain areas" />
      <my-button class="btn-active" @click="$router.push('/test')">
        Пройти тест
      </my-button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-more {
  margin: 0 auto;
  max-width: $media-xl;
  height: calc(100vw * 1.6);

  @include media-m {
    height: calc(100vw);
  }
  @include media-md {
    height: 600px;
  }

  &__layer-color {
    @include flex-column-between();
    max-width: $media-xl;
    padding: 12% 5% 12%;
    height: 100%;
    background-color: $white;

    @include media-m {
      padding: 4% 5% 6%;
    }
    @include media-md {
      padding: 20px 4% 20px;
    }
  }

  &__text {
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-size: 5.2vw;
    line-height: 1.45;
    letter-spacing: $spacing-l;

    @include media-m {
      font-size: 3.6vw;
    }
    @include media-md {
      font-size: 24px;
    }

    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  img {
    width: 65vw;
    max-width: 450px;

    @include media-md {
      // width: 65vw;
    }
  }
}
</style>

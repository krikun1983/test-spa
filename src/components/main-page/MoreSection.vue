<template>
  <section class="section-more">
    <div class="container">
      <p>
        Также по результатам теста<br />
        <span>вы получите</span> подробные <br /><span>советы</span> по
        определению наиболее перспективной <span>для вашего типа </span>
        <b>интеллекта</b>
        <span> сферы деятельности</span>, <span></span> которая принесет вам
        скорейший финансовый результат.
      </p>
      <img src="@/assets/img/brain_areas.webp" alt="brain areas" />
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
.section-more {
  background-color: $white;
  height: 511px;

  @include xss {
    height: 520px;
  }
  @include xs {
    height: 530px;
  }
  @include sm {
    height: 560px;
  }
  @include m {
    height: 620px;
  }

  .container {
    @include flex-column-between();
    padding: 12% 5% 12%;
    height: 100%;

    @include sm {
      padding-top: 10%;
      padding-bottom: 10%;
    }
    @include m {
      padding-top: 8%;
      padding-bottom: 8%;
    }
  }

  p {
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: $spacing-l;

    @include xs {
      font-size: 18px;
      line-height: 26px;
    }
    @include sm {
      font-size: 20px;
      line-height: 28px;
    }
    @include m {
      font-size: 22px;
      line-height: 30px;
    }

    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  img {
    width: 60%;
  }
}
</style>

<template>
  <section class="section-more">
    <div class="container">
      <p>
        Также по результатам теста<br />
        <span>вы получите</span> подробные <br /><span>советы</span> по
        определению наиболее перспективной <span>для вашего типа </span>
        <span class="lower-case">интеллекта</span>
        <span> сферы деятельности</span>, <span></span> которая принесет вам
        скорейший финансовый результат.
      </p>
      <img src="@/assets/img/brain_areas.webp" alt="brain areas" />
      <div class="section-more__link">
        <my-button class="btn-active" @click="$router.push('/test')">
          Пройти тест
        </my-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-more {
  height: 526px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 38px 12px 36px;
  }

  p {
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: calc(1em / 100 * 8);

    span {
      font-weight: bold;
      text-transform: uppercase;
    }

    .lower-case {
      text-transform: lowercase;
    }
  }

  img {
    margin-top: 26px;
  }

  &__link {
    margin-top: -8px;
  }
}
</style>

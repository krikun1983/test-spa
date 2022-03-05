<template>
  <section class="section-more">
    <div class="container">
      <p>
        Также по результатам теста<br />
        <span>вы получите</span> подробные <span>советы</span> по определению
        наиболее перспективной <span>для вашего типа </span>
        <span class="lower-case">интеллекта</span>
        <span> сферы деятельности</span>, которая принесет вам скорейший
        финансовый результат.
      </p>
      <img src="@/assets/img/brain_areas.png" alt="brain areas" />
      <router-link to="/test" class="heading__link"
        ><my-button class="btn-active">Пройти тест</my-button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-more {
  min-height: 511px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 511px;
    padding: 38px 12px 40px;
  }

  p {
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: calc(1em / 100 * 5);

    span {
      font-weight: bold;
      text-transform: uppercase;
    }

    .lower-case {
      text-transform: lowercase;
    }
  }

  img {
    margin-top: 50px;
  }
}
</style>

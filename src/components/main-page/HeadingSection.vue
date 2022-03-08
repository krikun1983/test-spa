<template>
  <section class="heading">
    <div class="heading__top">
      <h3>Пройдите точный и быстрый</h3>
      <h1>Тест на определение IQ</h1>
    </div>
    <div class="heading__bottom">
      <my-button class="btn-active" @click="$router.push('/test')">
        Пройти тест
      </my-button>
      <p>
        <span
          >И получите рекомендации<br />
          по развитию своего интеллекта</span
        >
        и улучшению финансового благосостояния и личной жизни
      </p>
      <a href="#about" class="heading__more">
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
.heading {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 522px;
  color: $white;
  background-image: url("@/assets/img/brain_bk.webp");
  background-color: $bg-images;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  &__top > h3 {
    padding-top: 28px;
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    letter-spacing: calc(1em / 100 * 5);
  }

  &__top > h1 {
    margin: 16px auto 0;
    width: 80%;
    font-family: "Yeseva One", serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 34.64px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: calc(1em / 100 * 3);
    color: $accent;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__bottom > p {
    margin: 22px auto 0;
    width: 82%;
    font-family: "PT Serif", serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    text-align: center;
    letter-spacing: calc(1em / 100 * 5);

    span {
      color: $accent;
    }
  }

  &__more {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0 12px;
    cursor: pointer;

    span {
      margin-top: 4px;
      font-size: 8px;
      line-height: 10.6px;
      letter-spacing: calc(1em / 100 * 5);
      color: $white;
      text-decoration: none;
    }
  }
}
</style>

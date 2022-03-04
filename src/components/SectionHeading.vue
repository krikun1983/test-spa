<template>
  <section class="heading">
    <div class="heading__top">
      <h3>Пройдите точный и быстрый</h3>
      <h1>Тест на определение IQ</h1>
    </div>
    <div class="heading__bottom">
      <my-button class="btn-active">Пройти тест</my-button>
      <p>
        <span
          >И получите рекомендации<br />
          по развитию своего интеллекта</span
        >
        и улучшению финансового благосостояния и личной жизни
      </p>
      <div class="heading__more">
        <button />
        <a href="#" class="heading__more">Подробнее</a>
      </div>
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
  margin-top: 46px;
  min-height: 522px;
  color: #ffffff;
  background-image: url("@/assets/img/rain_bk.png");
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
    font-family: "Yeseva One";
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: calc(1em / 100 * 3);
    color: #ffc700;
  }

  &__bottom > button {
    margin: 0 auto;
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
      color: #ffc700;
    }
  }

  &__more {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0 6px;

    button {
      width: 16px;
      height: 16px;
      border: none;
      border-radius: 50%;
      background-image: url("@/assets/img/more_btn.svg");
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }
    a {
      margin-top: 4px;
      font-size: 8px;
      line-height: 10.6px;
      letter-spacing: calc(1em / 100 * 5);
      color: #ffffff;
      text-decoration: none;
    }
  }
}
</style>

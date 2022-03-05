<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        Прохождение теста займет у вас не более <span>12 минут</span>, а его
        результаты вы сможете <span>использовать всю жизнь.</span>
      </p>
      <div class="footer-main-text">
        <p>
          Профессиональная интерпретация и детально
          <span>проработанные рекомендации</span> позволят вам качественно
          <span>изменить все аспекты своей жизни:</span> от финансового до
          любовного.
        </p>
      </div>
      <router-link to="/test" class="test__link"
        ><my-button class="btn-active-opacity">Пройти тест</my-button>
      </router-link>
      <p class="copyright">© 2022</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  min-height: 532px;
  font-family: "Merriweather", serif;
  background-image: url("@/assets/img/rain_bk2.jpg");
  background-color: $bg-images;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  .container {
    padding: 56px 10px 0;
  }

  .footer-text {
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: calc(1em / 100 * 5);
    color: $white;

    span {
      color: $accent;
    }
  }

  .footer-main-text {
    margin-bottom: 32px;
    padding: 30px 11px 0 14px;
    height: 216px;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: calc(1em / 100 * 5);
    color: $bg-header;
    border-radius: 20px;
    background-color: rgba(243, 243, 242, 0.8);

    span {
      font-weight: 700;
    }
  }

  .test__link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .copyright {
    margin-top: 55px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 10px;
    line-height: 23px;
    letter-spacing: calc(1em / 100 * 5);
    color: $white;
    opacity: 50%;
    text-align: center;
  }
}
</style>

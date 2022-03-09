<template>
  <section class="footer">
    <div class="container">
      <p class="footer-text">
        Прохождение теста займет у вас не более <span>12 минут</span>, а его
        результаты вы сможете <span>использовать всю жизнь.</span>
      </p>
      <div class="footer-box-text">
        <p>
          Профессиональная интерпретация и детально
          <span>проработанные рекомендации</span> позволят вам качественно
          <span>изменить все аспекты своей жизни:</span> от финансового до
          любовного.
        </p>
      </div>
      <my-button class="btn-active-opacity" @click="$router.push('/test/1')">
        Пройти тест
      </my-button>
      <p class="copyright">© {{ yearNow }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      yearNow: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 532px;
  font-family: "Merriweather", serif;
  background-image: url("@/assets/img/brain_bk_footer.webp");
  background-color: $bg-images;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  @include xss {
    height: 592px;
  }
  @include xs {
    height: 615px;
  }
  @include sm {
    height: 720px;
  }
  @include m {
    height: 800px;
  }

  .container {
    @include flex-column-between();
    height: 100%;
    padding: 17% 4% 3%;

    @include sm {
      padding-right: 10%;
    }
  }

  &-text {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: $spacing-m;
    color: $white;

    @include xs {
      font-size: 18px;
      line-height: 22px;
    }
    @include sm {
      font-size: 20px;
      line-height: 24px;
    }
    @include m {
      font-size: 22px;
      line-height: 28px;
    }

    span {
      color: $accent;
    }
  }

  &-box-text {
    @include flex-center();
    margin: 7% 0 11%;
    padding: 0 3%;
    height: 216px;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: $spacing-m;
    color: $bg-header;
    border-radius: 20px;
    background-color: rgba(243, 243, 242, 0.8);

    @include xs {
      font-size: 18px;
      line-height: 25px;
    }
    @include sm {
      font-size: 20px;
      line-height: 24px;
      height: 230px;
    }
    @include m {
      font-size: 24px;
      line-height: 30px;
      height: 250px;
    }

    span {
      font-weight: 700;
    }
  }

  .copyright {
    margin-top: 19%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 10px;
    line-height: 23px;
    letter-spacing: $spacing-m;
    color: $white;
    opacity: 50%;
    text-align: center;

    @include xs {
      font-size: 12px;
      line-height: 23px;
    }
    @include sm {
      font-size: 14px;
      line-height: 23px;
    }
    @include m {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>

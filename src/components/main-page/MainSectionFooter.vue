<template>
  <section class="main-footer">
    <div class="main-footer__layer">
      <p class="main-footer__text">
        Прохождение теста займет у вас не более <span>12 минут</span>, а его
        результаты вы сможете <span>использовать всю жизнь.</span>
      </p>
      <div class="main-footer__box-text">
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
      <p class="main-footer__copyright">
        © <span>{{ yearNow }}</span>
      </p>
      <img
        class="thunder-left"
        src="@/assets/img/thunder_left.webp"
        alt="icon"
      />

      <img
        class="thunder-right"
        src="@/assets/img/thunder_right.webp"
        alt="icon"
      />

      <span></span>
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
.main-footer {
  margin: 0 auto;
  max-width: $media-xl;
  height: calc(100vw * 1.66);
  font-family: "Merriweather", serif;

  @include media-m {
    height: calc(100vw);
  }
  @include media-md {
    height: 630px;
  }

  &__layer {
    position: relative;
    @include flex-column-between();
    max-width: $media-xl;
    height: 100%;
    padding: 17% 4% 3%;

    @include media-m {
      padding: 5% 4% 3%;
    }

    .thunder-left {
      position: absolute;
      bottom: 5%;
      left: 0;
      width: 43vw;
      z-index: 5;

      @include media-md {
        width: 200px;
      }
    }
    .thunder-right {
      position: absolute;
      top: 11%;
      right: 0;
      width: 40vw;
      z-index: 5;

      @include media-md {
        width: 200px;
      }
    }
  }

  &__text {
    font-size: 5vw;
    line-height: 1.2;
    letter-spacing: $spacing-m;
    color: $white;

    @include media-m {
      font-size: 4vw;
    }
    @include media-md {
      font-size: 22px;
      text-align: center;
    }

    span {
      color: $accent;
    }
  }

  &__box-text {
    @include flex-center();
    margin: 7% 0 11%;
    padding: 0 3%;
    height: 70vw;
    font-size: 5vw;
    line-height: 1.5;
    letter-spacing: $spacing-m;
    color: $bg-header;
    border-radius: 20px;
    background-color: rgba(243, 243, 242, 0.8);

    @include media-m {
      height: 50vw;
      font-size: 4vw;
    }
    @include media-md {
      margin: 15px 8% 25px;
      height: 300px;
      font-size: 24px;
      text-align: center;
    }

    span {
      font-weight: 700;
    }
  }

  &__copyright {
    margin-top: 19%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3.6vw;
    line-height: 1.8;
    letter-spacing: $spacing-m;
    color: $white;
    opacity: 50%;
    text-align: center;

    @include media-m {
      margin-top: 6%;
    }
    @include media-md {
      font-size: 20px;
    }

    span {
      font-size: 3.2vw;
      line-height: 1.8;
      @include media-md {
        font-size: 20px;
      }
    }
  }
}
</style>

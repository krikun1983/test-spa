<template>
  <section class="heading">
    <div class="heading__top">
      <h3>Пройдите точный и быстрый</h3>
      <h1>Тест <span>на определение IQ</span></h1>
    </div>
    <div class="heading__bottom">
      <my-button class="btn-active" @click="$router.push('/test/1')">
        Пройти тест
      </my-button>
      <p>
        <span>И получите рекомендации</span>
        <span>по развитию своего интеллекта</span>
        <span class="default-color">и улучшению финансового</span>
        благосостояния и личной жизни
      </p>
      <a href="#about" class="heading__bottom-more">
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
  @include flex-column-between();
  margin: 0 auto;
  padding: 9% 6% 4%;
  max-width: $desktop-xl;
  height: 522px;
  color: $white;
  background-image: url("@/assets/img/brain_bk.webp");
  background-color: $bg-images;
  background-repeat: no-repeat;
  background-position: center 1%;
  background-size: cover;

  @include xss {
    height: 584px;
    background-position: center 7%;
  }
  @include xs {
    height: 600px;
  }
  @include sm {
    height: 700px;
    background-position: center 14%;
  }
  @include m {
    height: 873px;
  }

  &__top {
    @include flex-column-center();

    h3 {
      margin-bottom: 5%;
      font-family: "PT Serif", serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 23.85px;
      text-align: center;
      letter-spacing: $spacing-m;

      @include sm {
        font-size: 22px;
        line-height: 25.85px;
      }
      @include m {
        font-size: 24px;
        line-height: 27.85px;
      }
    }

    h1 {
      font-family: "Yeseva One", serif;
      font-weight: 400;
      font-size: 30px;
      line-height: 34.64px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: $spacing-s;
      color: $accent;

      @include sm {
        font-size: 36px;
        line-height: 40.64px;
      }
      @include m {
        font-size: 38px;
        line-height: 42.64px;

        span {
          display: inline-block;
        }
      }
    }
  }

  &__bottom {
    @include flex-column-center();

    p {
      margin-top: 8%;
      font-family: "PT Serif", serif;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: $spacing-m;

      @include sm {
        font-size: 20px;
        line-height: 22px;
      }
      @include m {
        margin-top: 10%;
        font-size: 22px;
        line-height: 24px;
      }
    }

    span {
      display: inline-block;
      width: 100%;
      color: $accent;
    }

    .default-color {
      color: $white;
    }

    &-more {
      @include flex-column-center();
      margin-top: 16px;
      cursor: pointer;

      @include sm {
        img {
          width: 22px;
          height: 22px;
        }
      }

      @include m {
        margin-top: 18px;

        img {
          width: 24px;
          height: 24px;
        }
      }

      span {
        margin-top: 4px;
        font-size: 8px;
        line-height: 10.6px;
        letter-spacing: $spacing-m;
        color: $white;
        text-decoration: none;

        @include sm {
          margin-top: 6px;
          font-size: 11px;
          line-height: 13px;
        }
        @include m {
          margin-top: 8px;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>

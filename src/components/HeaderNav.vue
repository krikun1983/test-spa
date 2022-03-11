<template>
  <header
    :class="[
      'header',
      ($route.name === 'main' || $route.name === 'about') && 'header-fixed',
    ]"
  >
    <div class="header__container">
      <div class="burger" @click="setIsModalMenu">
        <span class="burger__lines"></span>
      </div>
      <div
        v-if="$route.name !== 'main' && $route.name !== 'notFoundPage'"
        class="header__heading"
      >
        <img
          @click="$router.push('/')"
          class="header__img"
          src="@/assets/img/brain.webp"
          alt="brain logo"
        />
        <h1 v-if="$route.name === 'test/:id'" class="header__heading-test">
          Тест на определение IQ
        </h1>
        <h1 v-else-if="$route.name === 'result'" class="header__heading-result">
          Готово!
        </h1>
      </div>
    </div>
    <nav :class="['header__nav', { 'header__nav-show': isModalMenu }]">
      <button class="header__nav_modal-btn" @click="setIsModalMenu">
        <img src="@/assets/img/close-icon.svg" alt="close modal" />
      </button>
      <ul class="header__nav-menu">
        <li @click="setIsModalMenu">
          <router-link to="/">Главная</router-link>
        </li>
        <li @click="setIsModalMenu">
          <a href="#about">Информация о тесте</a>
        </li>
        <li @click="setIsModalMenu">
          <router-link to="/test/1">Пройти тест</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isModalMenu: false,
    };
  },
  methods: {
    setIsModalMenu() {
      this.isModalMenu = !this.isModalMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 46px;
  background-color: $bg-header;

  @include media-m {
    height: 60px;
  }

  &-fixed {
    position: fixed;
    z-index: 15;
  }

  &__container {
    position: relative;
    margin: 0 auto;
    max-width: $media-xl;
    height: 100%;

    .burger {
      @include flex-center();
      position: absolute;
      top: 15px;
      left: 4%;
      z-index: 5;
      width: 24px;
      height: 20px;
      cursor: pointer;

      @include media-m {
        top: 20px;
        width: 30px;
      }

      &__lines {
        position: absolute;
      }
      &__lines,
      &__lines::before,
      &__lines::after {
        position: absolute;
        width: 100%;
        height: 2.67px;
        background-color: #696969;

        @include media-m {
          height: 3px;
        }
      }

      &__lines::before {
        content: "";
        top: -7px;

        @include media-m {
          top: -10px;
        }
      }
      &__lines::after {
        content: "";
        top: 7px;

        @include media-m {
          top: 10px;
        }
      }
    }

    img {
      cursor: pointer;
    }
  }

  &__heading {
    @include flex-center();
    height: 100%;
    font-family: "Yeseva One", serif;
    text-transform: uppercase;
    color: $accent;

    &-test {
      margin-left: 4%;
      font-size: 3.6vw;
      line-height: 1.2;
      font-weight: 400;
      letter-spacing: $spacing-m;

      @include media-md {
        font-size: 36px;
      }
    }

    &-result {
      margin-left: 8%;
      padding-right: 16%;
      font-size: 6vw;
      line-height: 1.2;
      font-weight: 400;
      letter-spacing: $spacing-xl;

      @include media-m {
        margin-left: 4%;
        font-size: 5vw;
      }
      @include media-md {
        font-size: 36px;
      }
    }
  }

  &__nav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 15;
    width: 100vw;
    min-height: 569px;
    background-color: $bg-header;
    transform: translate(-100vw);
    transition: transform 0.3s ease-in;

    &_modal-btn {
      position: fixed;
      top: 18px;
      right: 13px;
      border: none;
      background-color: transparent;
      cursor: pointer;

      @include media-m {
        top: 8vw;
        right: 8vw;
      }
      @include media-md {
        top: 100px;
        right: calc((100vw - $media-xl) / 2);
      }
    }

    &-menu {
      margin: 100px 0 0 23px;

      @include media-m {
        margin-left: 10vw;
      }
      @include media-md {
        margin-left: calc((100vw - $media-xl) / 2);
      }

      li {
        margin-bottom: 8vw;

        @include media-md {
          margin-bottom: 30px;
        }
      }

      a {
        display: inline-block;
        width: 100%;
        font-family: "Roboto";
        font-weight: 300;
        font-size: 5vw;
        line-height: 1.4;
        text-decoration: none;
        text-transform: uppercase;
        color: $white;

        @include media-m {
          font-size: 4vw;
        }
        @include media-md {
          font-size: 28px;
        }
      }
      a.router-link-active {
        color: $accent;
      }
    }

    &-show {
      right: 0;
      transform: translateX(0);
    }
  }
}
</style>

<template>
  <header
    :class="[
      'header',
      ($route.name === 'main' || $route.name === 'about') && 'header-fixed',
    ]"
  >
    <div class="container">
      <div class="burger" @click="setIsModalMenu">
        <span class="burger__lines"></span>
      </div>
      <div :class="[{ hidden: $route.name === 'main' }, 'heading']">
        <img
          src="@/assets/img/brain.webp"
          alt="brain icon"
          v-if="$route.name !== 'notFoundPage'"
        />
        <h1 v-if="$route.name === 'test/:id'" class="heading__test">
          Тест на определение IQ
        </h1>
        <h1 v-else-if="$route.name === 'result'" class="heading__result">
          Готово!
        </h1>
      </div>
    </div>
    <nav :class="[{ 'nav-header-show': isModalMenu }, 'nav-header']">
      <button class="modal-close-btn" @click="setIsModalMenu">
        <img src="@/assets/img/close-icon.svg" alt="close modal" />
      </button>
      <ul class="menu-header">
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
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.burger {
  cursor: pointer;
}

.heading {
  display: flex;
  align-items: center;
  margin-left: 48px;
  max-height: 46px;
  font-family: "Yeseva One", serif;
  text-transform: uppercase;
  color: $accent;

  &__test {
    margin-left: 9px;
    font-size: 12px;
    line-height: 13.86px;
    font-weight: 400;
    letter-spacing: $spacing-m;
  }

  &__result {
    margin-left: 24px;
    font-size: 20px;
    line-height: 23.86px;
    font-weight: 400;
    letter-spacing: $spacing-xl;
  }
}

.burger__lines {
  position: absolute;
  top: 23px;
  left: 15px;
  z-index: 4;

  @include media-m {
    top: 30px;
    left: 30px;
  }
}
.burger__lines,
.burger__lines::before,
.burger__lines::after {
  position: absolute;
  width: 24px;
  height: 2.67px;
  background-color: #696969;

  @include media-m {
    width: 30px;
    height: 3px;
  }
}

.burger__lines::before {
  content: "";
  top: -7px;

  @include media-m {
    top: -10px;
  }
}
.burger__lines::after {
  content: "";
  top: 7px;

  @include media-m {
    top: 10px;
  }
}

.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  min-width: $media-xss-min;
  min-height: 569px;
  background-color: $bg-header;
  transform: translate(-320px);
  transition: transform 0.3s ease-in;

  .modal-close-btn {
    position: fixed;
    top: 18px;
    right: 13px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @include media-m {
      top: 22px;
      right: 22px;
    }
  }

  .menu-header {
    margin: 100px 0 0 23px;

    li {
      margin-bottom: 27px;
    }

    a {
      display: inline-block;
      width: 100%;
      font-family: "Roboto";
      font-weight: 300;
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
      text-transform: uppercase;
      color: $white;

      @include media-m {
        font-size: 20px;
        line-height: 28px;
      }
    }
    a.router-link-active {
      color: $accent;
    }
  }
}

.nav-header-show {
  right: 0;
  transform: translateX(0);
}

.hidden {
  display: none;
}
</style>

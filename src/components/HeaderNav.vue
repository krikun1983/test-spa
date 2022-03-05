<template>
  <header class="header">
    <div class="container">
      <div class="burger" @click="setIsModalMenu">
        <span class="burger__lines"></span>
      </div>
    </div>
    <nav :class="[{ 'nav-header-show': isModalMenu }, 'nav-header']">
      <button class="modal-close-btn" @click="setIsModalMenu">
        <img src="@/assets/img/close-icon.svg" alt="close modal" />
      </button>
      <ul class="menu-header">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/about">Информация о тесте</router-link></li>
        <li><router-link to="/test">Пройти тест</router-link></li>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 46px;
  background-color: $bg-header;
}

.burger {
  position: relative;
  top: 23px;
  left: 15px;
  width: 24px;
  height: 16px;
  z-index: 1;
  cursor: pointer;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
.burger__lines,
.burger__lines::before,
.burger__lines::after {
  position: absolute;
  width: 24px;
  height: 2.67px;
  background-color: #696969;
}

.burger__lines::before {
  content: "";
  top: -7px;
}
.burger__lines::after {
  content: "";
  top: 7px;
}

.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  min-width: $mobile;
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
  }

  .menu-header {
    margin: 100px 0 0 23px;

    li {
      margin-bottom: 27px;
    }

    a {
      font-family: "Roboto";
      font-weight: 300;
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
      text-transform: uppercase;
      color: $white;
    }
    a.router-link-active {
      color: $accent;
    }
  }
}

.nav-header-show {
  transform: translateX(0);
}
</style>

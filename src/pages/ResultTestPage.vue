<template>
  <main>
    <div class="container">
      <div class="container__layer">
        <div class="result">
          <h4 class="result__heading-small">Ваш результат рассчитан:</h4>
          <p class="result__text">
            Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на
            15 пунктов отличается от среднего в большую или меньшую сторону!
          </p>
          <h3 class="result__heading">Скорее получите свой результат!</h3>
          <div class="result__box">
            <p class="result__box-description">
              В целях защиты персональных данных результат теста, их подробная
              интерпретация и рекомендации доступны в виде голосового сообщения
              по звонку с вашего мобильного телефона
            </p>
          </div>
          <p class="result__timer">
            Звоните скорее, запись доступна всего
            <span><timer-revers :timerBase="timerResult" /></span> минут
          </p>
          <button
            class="result__btn"
            @click="getApiResource"
            :disabled="!timerResult"
          >
            <img src="@/assets/img/phone.svg" alt="phone" />
            <span>Позвонить и прослушать результат</span>
          </button>
          <div class="user__wrapper">
            <transition name="user-show">
              <div v-if="Object.keys(swapi).length" class="user">
                <div>
                  Имя: <span>{{ swapi.name }}</span>
                </div>
                <div>
                  Рост: <span>{{ swapi.height }}</span>
                </div>
                <div>
                  Вес: <span>{{ swapi.mass }}</span>
                </div>
                <div>
                  Пол: <span>{{ swapi.gender }}</span>
                </div>
                <div>
                  Цвет глаз: <span>{{ swapi.eye_color }}</span>
                </div>
                <div>
                  Цвет волос: <span>{{ swapi.hair_color }}</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer-block />
</template>

<script>
import TimerRevers from "@/components/result-page/TimerRevers.vue";
import FooterBlock from "@/components/result-page/FooterBlock.vue";
export default {
  components: { TimerRevers, FooterBlock },
  data() {
    return {
      swapi: {},
      timer: {
        limit: 600,
        passed: 0,
      },
      timerInterval: null,
    };
  },
  computed: {
    timerResult() {
      return this.timer.limit - this.timer.passed;
    },
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => (this.timer.passed += 1), 1000);
    },
    selectionApiResource(name, height, mass, gender, eye_color, hair_color) {
      return {
        name,
        height,
        mass,
        gender,
        eye_color,
        hair_color,
      };
    },
    async getApiResource() {
      try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        if (!response.ok) {
          throw new Error("Errors");
        }
        const user = await response.json();
        this.swapi = this.selectionApiResource(
          user.name,
          user.height,
          user.mass,
          user.gender,
          user.eye_color,
          user.hair_color
        );
        clearInterval(this.timerInterval);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  updated() {
    if (this.timer.passed === this.timer.limit) {
      clearInterval(this.timerInterval);
    }
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 0;
  padding-top: 46px;
  height: 100%;
}

.container {
  min-height: 568px;
  height: 100%;
  background-image: url("@/assets/img/bk_result.webp");
  background-color: $bg-images;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  &__layer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 35px;
    min-height: 568px;
    height: 100%;
    background-color: rgba(13, 12, 17, 0.728);
  }
}

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "PT Serif", serif;
  color: $white;

  &__heading-small {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: calc(1em / 100 * 10);
    text-align: center;
    text-transform: uppercase;
  }
  &__text {
    margin-bottom: 18px;
    padding: 0 26px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: calc(1em / 100 * 5);
    text-align: center;
  }
  &__heading {
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: calc(1em / 100 * 10);
    text-align: center;
    text-transform: uppercase;
    color: $interactive;
  }
  &__box {
    margin: 0 32px 11px;
    padding: 15px 12px 12px;
    border-radius: 6px;
    background-color: #1c2741;

    &-description {
      font-family: "Roboto", sans-serif;
      font-size: 8px;
      line-height: 14px;
      font-weight: 500;
      letter-spacing: 2px;
      text-align: center;
      text-transform: uppercase;
      color: $white;
    }
  }
  &__timer {
    margin-bottom: 11px;
    padding: 0 24px;
    font-family: "PT Serif", serif;
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    letter-spacing: calc(1em / 100 * 10);
    text-align: center;
    color: $interactive;

    span {
      font-size: 20px;
      line-height: 20px;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 6px;
    padding-left: 15px;
    width: 290px;
    height: 92px;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    line-height: 17.58px;
    font-weight: 900;
    letter-spacing: calc(1em / 100 * 5);
    text-align: left;
    color: $white;
    border: none;
    border-radius: 5px;
    background-color: #eb1b00;
    cursor: pointer;

    img {
      padding-right: 18px;
    }
  }
  &__btn:disabled {
    background-color: #c7c2c2;
    cursor: default;
  }
}

.user {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.5vw;
  column-gap: 2vw;
  margin-top: 10px;
  width: 90%;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    letter-spacing: 2px;
  }

  span {
    font-weight: bold;
    color: $interactive;
  }
}
.user-show-enter-active {
  animation: user-show-in 0.5s;
}
.user-show-leave-active {
  animation: user-show-in 0.5s reverse;
}
@keyframes user-show-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

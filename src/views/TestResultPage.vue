<template>
  <main>
    <div class="result-container">
      <div class="result-container__layer">
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
          <div class="result__timer">
            <p>Звоните скорее, запись доступна всего</p>
            <p>
              <span><timer-revers :timerBase="timerResult" /></span> минут
            </p>
          </div>
          <button
            class="result__btn"
            @click="getApiResource"
            :disabled="!timerResult"
          >
            <img src="@/assets/img/phone.svg" alt="phone" />
            <span>Позвонить и прослушать результат</span>
          </button>
          <div class="result__user">
            <transition name="result__user-show">
              <div v-if="Object.keys(swapi).length" class="result__user-own">
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
        <img
          class="thunder-left"
          src="@/assets/img/thunder_left-result.webp"
          alt="icon"
        />

        <img
          class="thunder-right"
          src="@/assets/img/thunder_right-result.webp"
          alt="icon"
        />
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
.result-container {
  min-height: 568px;
  height: 100%;

  &__layer {
    position: relative;
    padding-top: 11vw;
    min-height: 568px;
    height: 100%;
    background-color: $bg-layer;
    font-family: "PT Serif", serif;
    color: $white;

    .thunder-left {
      position: absolute;
      top: 44%;
      left: 0;
      width: 36vw;
      z-index: 0;
      opacity: 0.9;
    }
    .thunder-right {
      position: absolute;
      top: 51%;
      right: 0;
      width: 27vw;
      z-index: 0;
      opacity: 0.9;
    }
  }
}

.result {
  @include flex-column-top();
  position: relative;
  z-index: 5;

  &__heading-small {
    margin-bottom: 2.5vw;
    font-size: 5vw;
    line-height: 1;
    font-weight: 700;
    letter-spacing: $spacing-xl;
    text-align: center;
    text-transform: uppercase;
  }

  &__text {
    margin-bottom: 6vw;
    padding: 0 10%;
    font-size: 4.5vw;
    line-height: 1.25;
    font-weight: 400;
    letter-spacing: $spacing-m;
    text-align: center;
  }

  &__heading {
    font-size: 5vw;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: $spacing-xl;
    text-align: center;
    text-transform: uppercase;
    color: $interactive;
  }

  &__box {
    @include flex-center();
    margin: 4.4vw 10vw 4vw;
    padding: 4vw 0;
    border-radius: 6px;
    background-color: $box-text;

    &-description {
      width: 90%;
      font-family: "Roboto", sans-serif;
      font-size: 2.5vw;
      line-height: 1.8;
      font-weight: 500;
      letter-spacing: 2px;
      text-align: center;
      text-transform: uppercase;
      color: $white;
    }
  }
  &__timer {
    margin-bottom: 2.4vw;
    font-family: "PT Serif", serif;
    font-size: 3.7vw;
    line-height: 1.2;
    font-weight: 400;
    letter-spacing: $spacing-xl;
    text-align: center;
    color: $interactive;

    span {
      font-size: 6.5vw;
      line-height: 1;
    }
  }
  &__btn {
    @include flex-between();
    padding-left: 5vw;
    width: 290px;
    height: 92px;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    line-height: 17.58px;
    font-weight: 900;
    letter-spacing: $spacing-m;
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
    background-color: $btn-bg-disabled;
    cursor: default;
  }
}

.result__user {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 3.5vw;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 2px;

  &-own {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.5vw;
    column-gap: 1vw;
    margin-top: 4vw;
    width: 90%;

    span {
      font-weight: bold;
      color: $interactive;
    }
  }
}

.result__user-show-enter-active {
  animation: result__user-show-in 0.4s;
}
.result__user-show-leave-active {
  animation: result__user-show-in 0.5s reverse;
}
@keyframes result__user-show-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

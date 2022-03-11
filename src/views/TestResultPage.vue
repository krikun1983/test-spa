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
      <footer-block />
    </div>
  </main>
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
    selectionApiResource(name, height, mass, gender) {
      return {
        name,
        height,
        mass,
        gender,
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
          user.gender
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
  position: relative;
  min-height: calc(100vw * 1.65);
  height: 100%;

  @include media-m {
    min-height: 100vw;
  }
  @include media-md {
    min-height: 50vw;
  }

  &__layer {
    position: relative;
    padding-top: 11vw;
    height: 100%;
    background-color: $bg-layer;
    font-family: "PT Serif", serif;
    color: $white;

    @include media-m {
      padding-top: 5vw;
    }
    @include media-md {
      padding-top: 30px;
    }

    .thunder-left {
      position: absolute;
      top: 44%;
      left: 0;
      width: 36vw;
      z-index: 0;
      opacity: 0.9;

      @include media-md {
        top: -150px;
      }
    }
    .thunder-right {
      position: absolute;
      top: 51%;
      right: 0;
      width: 27vw;
      z-index: 0;
      opacity: 0.9;

      @include media-md {
        top: -350px;
      }
    }
  }
}

.result {
  @include flex-column-top();
  margin: 0 auto;
  max-width: $media-xl;
  position: relative;
  z-index: 5;
  height: 100%;

  &__heading-small {
    margin-bottom: 2.5vw;
    font-size: 5vw;
    line-height: 1;
    font-weight: 700;
    letter-spacing: $spacing-xl;
    text-align: center;
    text-transform: uppercase;

    @include media-m {
      margin-bottom: 1.5vw;
      font-size: 4vw;
    }
    @include media-md {
      margin-bottom: 20px;
      font-size: 28px;
    }
  }

  &__text {
    margin-bottom: 6vw;
    padding: 0 10%;
    font-size: 4.5vw;
    line-height: 1.25;
    font-weight: 400;
    letter-spacing: $spacing-m;
    text-align: center;

    @include media-m {
      margin-bottom: 4vw;
      font-size: 3vw;
    }
    @include media-md {
      margin-bottom: 20px;
      font-size: 26px;
    }
  }

  &__heading {
    font-size: 5vw;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: $spacing-xl;
    text-align: center;
    text-transform: uppercase;
    color: $interactive;

    @include media-m {
      font-size: 4vw;
    }
    @include media-md {
      font-size: 32px;
    }
  }

  &__box {
    @include flex-center();
    margin: 4.4vw 10vw 4vw;
    padding: 4vw 0;
    border-radius: 6px;
    background-color: $box-text;

    @include media-m {
      margin: 3vw 8vw;
      padding: 2vw 0;
    }
    @include media-md {
      margin: 20px 15px;
      padding: 15px 0;
    }

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

      @include media-m {
        font-size: 2vw;
      }
      @include media-md {
        font-size: 20px;
      }
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

    @include media-m {
      font-size: 2.7vw;
    }
    @include media-md {
      margin-bottom: 20px;
      font-size: 18px;
    }

    span {
      font-size: 6.5vw;
      line-height: 1;

      @include media-m {
        font-size: 5vw;
      }
      @include media-md {
        font-size: 26px;
      }
    }
  }
  &__btn {
    @include flex-between();
    padding-left: 5vw;
    width: 290px;
    height: 92px;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 900;
    letter-spacing: $spacing-m;
    text-align: left;
    color: $white;
    border: none;
    border-radius: 5px;
    background-color: #eb1b00;
    cursor: pointer;

    @include media-m {
      padding-left: 4vw;
      width: 45vw;
      height: 12vw;
      font-size: 2.3vw;
    }
    @include media-md {
      @include flex-center();
      padding: 0 20px;
      min-width: 300px;
      height: 90px;
      font-size: 20px;
    }

    img {
      padding-right: 3vw;
    }
  }
  &__btn:disabled {
    background-color: $btn-bg-disabled;
    cursor: default;
  }
}

.result__user {
  @include flex-column-top();
  font-family: "Roboto", sans-serif;
  font-size: 3.5vw;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 2px;
  width: 100%;
  min-height: 16vw;

  @include media-m {
    font-size: 2.5vw;
  }
  @include media-md {
    font-size: 18px;
  }

  &-own {
    display: grid;
    grid-template-columns: 1fr 30vw;
    row-gap: 1.5vw;
    column-gap: 2vw;
    margin-top: 4vw;

    @include media-m {
      margin-top: 2.5vw;
    }
    @include media-md {
      margin-top: 20px;
    }

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

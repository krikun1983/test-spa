<template>
  <main>
    <section class="not-found-container">
      <div class="not-found-container__layer">
        <h2>Страница не найдена</h2>
        <p>
          Путь <span>{{ $route.path }}</span> не существует
        </p>
        <img src="@/assets/img/404.webp" alt="404 - page not found" />
        <button class="btn_back" @click="$router.push('/')">На главную</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-found-container {
  min-height: 522px;
  height: 100%;

  &__layer {
    @include flex-column-center();
    min-height: 522px;
    color: $white;
    height: 100%;
    background-color: $bg-layer;

    h2 {
      margin-bottom: 3vw;
    }

    h2 {
      font-size: 5vw;
      line-height: 1.2;
    }

    p {
      font-size: 4vw;
      line-height: 1.2;

      span {
        font-weight: bold;
        color: $accent;
      }
    }

    img {
      margin: 5vw 0;
      width: 65%;
      max-width: 300px;
    }

    .btn_back {
      padding: 15px 20px;
      font-weight: bold;
      color: $white;
      border: 1px solid $white;
      border-radius: 5px;
      background-color: transparent;
      cursor: pointer;

      &:hover,
      &:active {
        color: $accent;
        border: 1px solid $accent;
        background-color: rgba(255, 199, 0, 0.2);
      }
    }
  }
}
</style>

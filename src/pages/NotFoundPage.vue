<template>
  <main>
    <div class="container">
      <div class="container__layer">
        <h2>Страница не найдена</h2>
        <p>
          Путь <span>{{ $route.path }}</span> не существует
        </p>
        <img src="@/assets/img/404.webp" alt="404 - page not found" />
        <button class="btn_back" @click="$router.push('/')">На главную</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  margin-top: 0;
  padding-top: 46px;
  height: 100%;
}

.container {
  min-height: 522px;
  height: 100%;
  background-image: url("@/assets/img/brain_bk_footer.webp");
  background-color: $bg-images;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  &__layer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 522px;
    color: $white;
    height: 100%;
    background-color: rgba(13, 12, 17, 0.728);

    h2,
    p {
      margin-bottom: 20px;
    }

    h2 {
      font-size: 20px;
      line-height: 22px;
    }

    p {
      font-size: 16px;
      line-height: 18px;

      span {
        font-weight: bold;
        color: $accent;
      }
    }

    img {
      margin-bottom: 40px;
      width: 65%;
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

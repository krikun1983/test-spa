<template>
  <main>
    <main-section-heading />
    <main-section-about />
    <main-section-more />
    <main-section-footer />
  </main>
</template>

<script>
import MainSectionHeading from "@/components/main-page/MainSectionHeading.vue";
import MainSectionAbout from "@/components/main-page/MainSectionAbout.vue";
import MainSectionMore from "@/components/main-page/MainSectionMore.vue";
import MainSectionFooter from "@/components/main-page/MainSectionFooter.vue";
export default {
  components: {
    MainSectionHeading,
    MainSectionAbout,
    MainSectionMore,
    MainSectionFooter,
  },
};
</script>

<style></style>

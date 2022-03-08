<template>
  <main>
    <section-heading />
    <section-about />
    <section-more />
    <section-footer />
  </main>
</template>

<script>
import SectionHeading from "@/components/main-page/HeadingSection.vue";
import SectionAbout from "@/components/main-page/AboutSection.vue";
import SectionMore from "@/components/main-page/MoreSection.vue";
import SectionFooter from "@/components/main-page/FooterSection.vue";
export default {
  components: { SectionHeading, SectionAbout, SectionMore, SectionFooter },
};
</script>

<style></style>

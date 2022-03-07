<template>
  <main>
    <section-heading />
    <section-about />
    <section-more />
  </main>
  <footer-section />
</template>

<script>
import SectionHeading from "@/components/main-page/HeadingSection.vue";
import SectionAbout from "@/components/main-page/AboutSection.vue";
import SectionMore from "@/components/main-page/MoreSection.vue";
import FooterSection from "@/components/main-page/FooterSection.vue";
export default {
  components: { SectionHeading, SectionAbout, SectionMore, FooterSection },
};
</script>

<style></style>

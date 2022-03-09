<template>
  <main>
    <heading-section />
    <about-section />
    <more-section />
    <footer-section />
  </main>
</template>

<script>
import HeadingSection from "@/components/main-page/HeadingSection.vue";
import AboutSection from "@/components/main-page/AboutSection.vue";
import MoreSection from "@/components/main-page/MoreSection.vue";
import FooterSection from "@/components/main-page/FooterSection.vue";
export default {
  components: { HeadingSection, AboutSection, MoreSection, FooterSection },
};
</script>

<style></style>

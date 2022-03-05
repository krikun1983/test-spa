<template>
  <main>
    <section-heading />
    <section-about />
    <section-more />
  </main>
  <footer-section />
</template>

<script>
import SectionHeading from "@/components/SectionHeading.vue";
import SectionAbout from "@/components/SectionAbout.vue";
import SectionMore from "@/components/SectionMore.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  components: { SectionHeading, SectionAbout, SectionMore, FooterSection },
};
</script>

<style></style>

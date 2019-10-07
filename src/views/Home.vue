<template>
  <div>
    <headerSection />
    <AboutUs />
    <Services />
    <works />
    <fontSection />
    <testinomials />
    <blogSection />
    <footerSection />
  </div>
</template>

<script>
import headerSection from "@/components/headerSection.vue";
import AboutUs from "@/components/AboutUs.vue";
import Services from "@/components/Services.vue";
import works from "@/components/works.vue";
import fontSection from "@/components/fontSection.vue";
import testinomials from "@/components/testinomials.vue";
import blogSection from "@/components/blogSection.vue";
import footerSection from "@/components/footerSection.vue";
export default {
  components: {
    headerSection,
    AboutUs,
    Services,
    works,
    fontSection,
    testinomials,
    blogSection,
    footerSection
  }
};
</script>

<style></style>

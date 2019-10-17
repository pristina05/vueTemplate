<template>
  <div>
    <headerSection />
    <AboutUs />
    <Services />
    <works />
    <fontSection />
    <Studio />
    <!-- <scrollSpy /> -->
    <!-- <videoSection /> -->
    <testinomials />
    <blogSection />

    <footerSection />
  </div>
</template>

<script>
// import headerSection from "@/components/headerSection.vue";
import AboutUs from "@/components/aboutUs.vue";
import Services from "@/components/services.vue";
import works from "@/components/works.vue";
import fontSection from "@/components/fontSection.vue";
import testinomials from "@/components/testinomials.vue";
import blogSection from "@/components/blogSection.vue";
// import scrollSpy from "@/components/scrollSpy.vue";
// import footerSection from "@/components/footerSection.vue";
import Studio from "@/components/studio.vue";

// import videoSection from "@/components/videoSection.vue";

export default {
  components: {
    // headerSection,
    AboutUs,
    Services,
    works,
    fontSection,
    Studio,

    // scrollSpy,
    // videoSection,

    testinomials,
    blogSection
    // footerSection
  }
};
</script>

<style></style>

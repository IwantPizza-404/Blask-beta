<script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  export default{
    mounted() {
      AOS.init({
        // Global settings:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
      });
    },
  }
</script>

<template>
  <div class="page-wrapp">
    <Header/>
    <main class="page-sections">
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
    </main>
    <Footer/>
  </div>
</template>

<style>
  .page-wrapp{
    display: flex;
    flex-direction: column;
  }
  .page-sections{
    display: flex;
    flex-direction: column;
    gap: 200px;
    overflow-x: clip;
  }
  @media screen and (max-width: 550px){
    .page-sections{
      gap: 160px;
    }
  }
  @media screen and (max-width: 425px){
    .page-sections{
      gap: 120px;
    }
  }
</style>
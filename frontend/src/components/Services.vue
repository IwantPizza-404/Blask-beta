<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import design_icon from './icons/design_icon.vue'
  import FE_icon from './icons/FE_icon.vue'
  import BE_icon from './icons/BE_icon.vue'

  export default{
    components: {
      design_icon,
      FE_icon,
      BE_icon,

      Swiper,
      SwiperSlide
    },
    setup() {
      return {};
    },
  }
</script>

<template>
  <section id="services" class="sec-services">
    <div class="container">
      <div class="services_wrapp">
        <div
          data-aos="sld-top"
          data-aos-duration="500"
          data-aos-delay="400"
          class="services-title"
        >
          <h2 class="services_title sec-title sec-title_dot">Services</h2>
        </div>
        <div class="services_content">
          <swiper
            :slidesPerView="'auto'"
            :spaceBetween="20"
            class="service_slider"
          >
            <swiper-slide>
              <div 
                class="service-card"
                data-aos="zoom-cst"
                data-aos-duration="300"
                data-aos-delay="1000"
              >
                <div class="card-icon">
                  <design_icon/>
                </div>
                <div class="card-content">
                  <h3 class="card-title">Product<br>Design</h3>
                  <p class="card-subtitle">6 Projects</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div 
                class="service-card"
                data-aos="zoom-cst"
                data-aos-duration="300"
                data-aos-delay="1200"
              >
                <div class="card-icon">
                  <FE_icon/>
                </div>
                <div class="card-content">
                  <h3 class="card-title">Front-End<br>Development</h3>
                  <p class="card-subtitle">45 Projects</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div 
                class="service-card"
                data-aos="zoom-cst"
                data-aos-duration="300"
                data-aos-delay="1400"
              >
                <div class="card-icon">
                  <BE_icon/>
                </div>
                <div class="card-content">
                  <h3 class="card-title">Back-End<br>Development</h3>
                  <p class="card-subtitle">15 Projects</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div 
                class="service-card"
                data-aos="zoom-cst"
                data-aos-duration="300"
                data-aos-delay="1600"
              >
                <div class="card-icon">
                  <design_icon/>
                </div>
                <div class="card-content">
                  <h3 class="card-title">Product<br>Design</h3>
                  <p class="card-subtitle">6 Projects</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>      
    </div>
    <div 
      class="bg-assets"
    >
      <div
        data-aos="spread" 
        data-aos-duration="1500" 
        data-aos-delay="400"
      >
        <svg width="1920" height="298" viewBox="0 0 1920 298" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-10 290.735C-10 290.735 247.386 41.1184 468.239 13.4865C707.889 -16.4972 811.139 208.74 1052.75 196.353C1260.69 185.691 1337.4 -3.9654 1544.75 13.4865C1714.58 27.78 1930 196.353 1930 196.353" stroke="url(#paint0_linear_32_205)" stroke-width="20"/>
          <defs>
            <linearGradient id="paint0_linear_32_205" x1="170.5" y1="26.5482" x2="1880.63" y2="269.597" gradientUnits="userSpaceOnUse">
              <stop stop-color="#DBF52F" stop-opacity="0.7"/>
              <stop offset="1" stop-color="#F4FFAD" stop-opacity="0.5"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </section>  
</template>

<style scoped>
  .sec-services{
    position: relative;
    overflow: hidden;
  }
  .services_wrapp{
    display: flex;
    flex-direction: column;
    gap: 115px;
  }
  .services-title{
    display: flex;
    align-items: center;
  }
  .services_content{
    display: flex;
    gap: 20px;
  }
  .service-card{
    display: flex;
    border-radius: 25px;
    border: 2px solid #fff;
    background: var(--alpha-bg);
    backdrop-filter: blur(32px);
    flex-direction: column;
    padding: 40px 30px 45px 30px;
    justify-content: space-between;
    flex: 1;
    height: 300px;
  }
  .card-icon{
    display: flex;
    width: fit-content;
  }
  .card-content{
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 15px;
  }
  .card-title{
    font-size: 26px;
    font-weight: 500;
    width: min-content;
  }
  .card-subtitle{
    font-size: 18px;
    font-weight: 300;
    width: fit-content;
  }
  .bg-assets{
    z-index: -1;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    filter: blur(17px);
  }
  
  .service_slider{
    width: 100%;
  }

  .swiper-slide{
    transition: .3s ease;
    max-width: calc(25% - 15px);
  }

  [data-aos='spread'] {
    clip-path: inset(0 100% 0  0);
    transition-property: clip-path;
  }

  [data-aos='spread'].aos-animate {
    clip-path: inset(0);
  }

  [data-aos='sld-top'] {
    transform: translateY(-10%);
    opacity: 0;
    transition-property: transform, opacity;
  }

  [data-aos='sld-top'].aos-animate {
    transform: translateY(0);
    opacity: 1;
  }

  [data-aos='zoom-cst'] {
    transform: scale(0.98);
    opacity: 0;
    transition-property: transform, opacity;
  }

  [data-aos='zoom-cst'].aos-animate {
    transform: scale(1);
    opacity: 1;
  }

  @media screen and (max-width: 1290px){
    .swiper-slide{
      max-width: 285px;
    }
  }
  @media screen and (max-width: 1024px){
    .swiper{
      overflow: visible;
    }
  }
  @media screen and (max-width: 675px){
    .service-card{
      padding: 30px 20px;
      height: 250px;
      width: 250px;
    }
    .swiper-slide{
      width: 250px;
    }
    .services_wrapp{
      gap: 75px;
    }
  }
  @media screen and (max-width: 550px){
    .services_wrapp{
      gap: 45px;
    }
  }
</style>
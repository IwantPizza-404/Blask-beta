<script>
  export default{
    data(){
      return {
        object: null,
        options:{
          magneticForce: 0.5
        },
        pos: {
          x: 0,
          y: 0
        }
      }
    },
    methods:{
      Scroll(){
        window.scrollTo(0, window.innerHeight + 175)
      },
      MagnetHover(event){
        this.object = event.target.getBoundingClientRect();
        this.pos.x = Math.round(event.clientX - this.object.left - this.object.width / 2)
        this.pos.y = Math.round(event.clientY - this.object.top - this.object.height / 2)
        
        this.$refs.scrollbtn.style.transform = `translate(${this.pos.x * this.options.magneticForce}px, ${this.pos.y * this.options.magneticForce}px)`
      },
      MouseOut(){
        this.$refs.scrollbtn.style.transform = `translate(0px, 0px)`
      },
    }
  }
</script>

<template>
  <div class="hero-sec">
    <div class="container">
      <div class="hero_wrapp" data-aos="fade" data-aos-duration="1000" data-aos-delay="0">
        <div class="hero_content">
          <div class="hero_context">
            <h1
              data-aos="sld-top"
              data-aos-duration="500"
              data-aos-delay="500"
              class="hero-title"
            >
              Hi, I’m Yusuf Safarov!
            </h1>
            <p class="hero-subtitle" data-aos="sld-top" data-aos-duration="400" data-aos-delay="1000">I’ve been working as a <b>Front-End</b> developer for 4 years.</p>
          </div>
          <div class="hero-btns" data-aos="fade" data-aos-duration="500" data-aos-delay="1000">
            <div class="contact-btn">
              <a href="#">Let’s Talk</a>
            </div>
            <div class="cv-btn">
              <a href="#">
                <span>Download CV</span>
                <svg width="40" height="41" viewBox="0 0 40 41" color-interpolation-filters="sRGB" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1.5" width="38" height="38" rx="13" stroke="white" stroke-width="2"/>
                  <g clip-path="url(#clip0_59_97)">
                    <path d="M15.7143 19.7857L20 24.0714L24.2857 19.7857" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 11.2143V24.0714" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 29.7857H25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_59_97">
                    <rect width="20" height="20" fill="white" transform="translate(10 10.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <div class="scroll-btn_wrapp">
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="1300"
            >
              <button 
                @click="Scroll"
                @mousemove="MagnetHover" 
                @mouseout="MouseOut" 
                class="scroll-btn" 
                ref="scrollbtn"
              >
                <svg width="20" height="52" viewBox="0 0 20 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.11612 50.8839C9.60427 51.372 10.3957 51.372 10.8839 50.8839L18.8388 42.9289C19.327 42.4408 19.327 41.6493 18.8388 41.1612C18.3507 40.673 17.5592 40.673 17.0711 41.1612L10 48.2322L2.92893 41.1612C2.44078 40.673 1.64932 40.673 1.16117 41.1612C0.67301 41.6493 0.67301 42.4408 1.16117 42.9289L9.11612 50.8839ZM8.75 0L8.75 50H11.25L11.25 0L8.75 0Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="gr-banana">
          <svg id="grBanana" width="950" height="366" viewBox="0 0 950 366" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M160.788 22.8461C345.727 103.018 550.679 90.8886 691.321 66.1572C796.288 47.6991 919.888 76.5135 944.255 180.268C959.307 244.365 948.812 312.631 863.728 352.537C780.109 391.756 637.589 332.526 503 326C456.823 323.761 407.591 331.314 360.003 343.726C215.103 381.517 41.5637 334.755 11.3059 188.096C-14.6903 62.0926 -0.660643 -47.1423 160.788 22.8461Z" fill="url(#paint0_linear_27_109)" fill-opacity="0.8"/>
            <defs>
              <linearGradient id="paint0_linear_27_109" x1="512.258" y1="22.8461" x2="512.258" y2="352.537" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0.9"/>
                <stop offset="0.819" stop-color="#DBF52F" stop-opacity="0.4337"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-sec{
    padding: 130px 0 100px 0;
    overflow-x: clip;
}
.hero_wrapp{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 90px;
}
.hero_context, .hero_content{
    display: flex;
    flex-direction: column;
}
.hero_content{
    position: relative;
    gap: 90px;
    max-width: 565px;
}
.hero_context{
    gap: 48px;
}
.hero-title{
    line-height: 120%;
    font-weight: 500;
    font-size: 90px;
}
.hero-subtitle{
    font-weight: 400;
    font-size: 28px;
}
.hero-btns{
    display: flex;
    gap: 25px;
    align-items: center;
}
.contact-btn, .contact-btn a{
    display: flex;
}
.contact-btn a{
    justify-content: center;
    align-items: center;
    padding: 0 45px;
    height: 58px;
    border-radius: 15px;
    font-size: 22px;
    border: 2px solid #fff;
    background: linear-gradient(60deg, rgba(255, 255, 255, 0.2), rgba(219, 245, 47, 0.3));
}

.cv-btn, .cv-btn a{
    display: flex;
}
.cv-btn a{
    justify-content: center;
    align-items: center;
    height: 58px;
    font-size: 22px;
    gap: 15px;
}
.gr-banana{
    z-index: -1;
    position: absolute;
    /* transform: translate(-200px, 200px); */
    filter: blur(100px);
    -webkit-filter: blur(100px);
    transform: scale(1);
    opacity: 1;
    animation: GrBanana_glow 4s ease alternate infinite;
    bottom: 15px;
    left: 0;
}
.scroll-btn{
    width: 140px;
    height: 140px;
    position: relative;
    border-radius: 50%;
    border: 2.5px solid #fff;
    backdrop-filter: brightness(145%) blur(90px);
    transition: transform 800ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
}
.scroll-btn svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.scroll-btn_wrapp{
    position: absolute;
    transform: translate(100%, -50%);
    right: -100px;
    top: 65%;
}

/* #grBanana path{
  animation: GrBanana 12s ease-in-out infinite;
} */


[data-aos='sld-right'] {
  transform: translateX(-5%);
  opacity: 0;
  transition-property: transform, opacity;
}

[data-aos='sld-right'].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

[data-aos='sld-top'] {
  transform: translateY(10%);
  opacity: 0;
  transition-property: transform, opacity;
}

[data-aos='sld-top'].aos-animate {
  transform: translateY(0);
  opacity: 1;
}

[data-aos='zoom-cus']{
  transform: scale(0);
  opacity: 0;
  transition-property: transform, opacity;
}

[data-aos='zoom-cus'].aos-animate{
  transform: scale(0.3);
  opacity: 1;
}

@media screen and (max-width: 1550px){
  .hero-sec{
    padding: 100px 0 100px 0;
  }
}

@media screen and (max-width: 1024px){
  .hero_content{
    position: static;
  }
  .scroll-btn_wrapp{
    right: 0;
    transform: translate(0%, -50%);
  }
  /* .hero-sec{
    min-height: 550px;
    height: 75vh;
  } */
}

@media screen and (max-width: 850px){
  .scroll-btn_wrapp{
    display: none;
  }
  .gr-banana{
    /* transform: translate(-50%);
    left: 50%; */
    left: -25%;
  }
}

@media screen and (max-width: 768px){
  .hero-title{
    font-size: 72px;
  }
  .hero-subtitle{
    font-size: 25px;
  }
  .hero_content{
    max-width: 480px;
  }
}

@media screen and (max-width: 550px){
  .hero-sec{
    padding: 120px 0 80px 0;
  }
  .gr-banana{
    left: -40%;
  }
  .gr-banana svg{
    transform: rotate(20deg);
  }
  .hero_context{
    gap: 36px;
  }
  .hero_content{
    gap: 70px;
  }
  .hero-btns{
    flex-direction: column;
  }

  .contact-btn, .cv-btn, .contact-btn a, .cv-btn a{
    width: 100%;
    height: 55px;
    font-size: 22px;
  }
  .hero-title{
    font-size: 62px;
  }
  .hero-subtitle{
    font-size: 24px;
  }
}

@media screen and (max-width: 425px){
  .hero-title{
    font-size: 52px;
  }
  .hero-sec{
    padding: 100px 0 100px 0;
  }
}
</style>
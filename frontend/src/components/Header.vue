<script>
  export default{
    data(){
      return{
        nav_links:[
          {title: 'Home', link: '#'},
          {title: 'Services', link: '#services'},
          {title:'About', link: '#about'},
          {title: 'Projects', link: '#projects'},
        ],
        IsHover: false,
        NavShow: false,
      }
    },
    methods:{
      ToggleNav(){
        this.NavShow =! this.NavShow
        window.scrollTo(0,0)
        if(this.NavShow == true)
          document.body.classList.add('lock')
        else
          document.body.classList.remove('lock')
      }
    }
  }
</script>

<template>
  <header
    data-aos="fade"
    data-aos-duration="500"
    data-aos-delay="300" 
    class="header"
  >
    <div class="container">
      <div class="header-wrapp">
        <div class="header_logo">
          <a href="#">
            <img src="@/assets/img/logo.svg">
          </a>
        </div>
        <nav :class="{'header_nav': true, 'opened': this.NavShow}">
          <ul :class="{'nav-links': true, 'hovered': this.IsHover}">
            <li v-for="link in this.nav_links" class="nav-link">
              <a 
                :href="link.link"
                v-on="NavShow ? {click: () => ToggleNav()} : {}"
                @mouseover=" this.IsHover = true" 
                @mouseleave=" this.IsHover = false"
              >
                {{link.title}}
              </a>
            </li>
          </ul>
        </nav>
        <div class="hire-btn">
          <a href="#">
            <span>Hire me</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1508 14.864C0.760279 15.2545 0.760279 15.8877 1.1508 16.2782C1.54133 16.6687 2.17449 16.6687 2.56502 16.2782L1.1508 14.864ZM17 1.42893C17 0.876647 16.5523 0.428932 16 0.428932L7.00005 0.428933C6.44776 0.428932 6.00005 0.876648 6.00005 1.42893C6.00005 1.98122 6.44776 2.42893 7.00005 2.42893L15 2.42893L15 10.4289C15 10.9812 15.4478 11.4289 16 11.4289C16.5523 11.4289 17 10.9812 17 10.4289L17 1.42893ZM2.56502 16.2782L16.7072 2.13604L15.2929 0.721826L1.1508 14.864L2.56502 16.2782Z" fill="white"/>
            </svg>
          </a>
        </div>
        <button @click="ToggleNav()" class="burger-btn">
          <div :class="{'burger-icon': true, 'active': this.NavShow}">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<style>
.header{
  transform: none !important;
  display: flex;
  padding: 20px 0;
  z-index: 1;
}
.header-wrapp{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_logo, .header_logo a{
  display: flex;
}
.header_logo img{
  height: 50px;
  width: auto;
}
.header_nav{
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-links{
  height: 50px;
  display: flex;
  align-items: center;
  gap: 75px;
  padding: 0 45px;
}
.nav-link a{
  display: block;
  padding: 5px 0;
  font-size: 20px;
  font-weight: 400;
  transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-links.hovered .nav-link a{
  opacity: 0.5;
}

.nav-links .nav-link a:hover{
  opacity: 1;
}


.hire-btn, .hire-btn a{
  display: flex;
}
.hire-btn a{
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 22px;
  padding: 0 25px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid #fff;
}

.burger-icon{
  position: relative;
  display: block;
  height: 15px;
  width: 30px;
}

.burger-btn{
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  padding: 0px;
  border-radius: 12px;
  background: transparent;
  transition: .3s ease;
}

.burger-btn:hover{
  background: rgb(30, 30, 30, 0.5);
}

.burger-icon span{
  transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transtion: .5s cubic-bezier(0.19, 1, 0.22, 1);
}

.burger-icon span:nth-child(1){
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
}
.burger-icon span:nth-child(2){
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
}

.burger-icon.active span:nth-child(1){
  top: 7px;
  left: 0;
  transform: rotate(45deg);
}

.burger-icon.active span:nth-child(2){
  bottom: 6px;
  left: 0;
  transform: rotate(-45deg);
}



@media screen and (max-width: 1200px){
  .nav-links{
    gap: 45px;
  }
}

@media screen and (max-width: 1024px){
  .header_nav{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: .3s ease;
    z-index: 1;
    backdrop-filter: blur(25px);
    background: rgb(17, 17, 17, 0.7);
    visibility: hidden;
    opacity: 0;
  }

  .header_nav.opened{
    visibility: visible;
    opacity: 1;
  }

  .nav-link a{
    opacity: 0;
    transition-delay: .3s;
    transform: translate(0, 15px);
    font-size: 28px;
  }

  .header_nav.opened .nav-link:nth-child(1) a{
    transition-delay: 0s;
  }
  .header_nav.opened .nav-link:nth-child(2) a{
    transition-delay: .1s;
  }
  .header_nav.opened .nav-link:nth-child(3) a{
    transition-delay: .2s;
  }
  .header_nav.opened .nav-link:nth-child(4) a{
    transition-delay: .3s;
  }

  .header_nav.opened .nav-link a{
    opacity: 1;
    transform: translate(0, 0);
  }



  .header_logo, .burger-btn{
    z-index: 2;
  }
  .nav-links{
    flex-direction: column;
    height: fit-content;
  }

  .hire-btn{
    display: none;
  }
  .header_logo img{
    height: 60px;
  }
  .burger-btn{
    display: flex;
  }
}
@media screen and (max-width: 768px){
  .header_logo img{
    height: 55px;
  }
  .burger-btn{
    width: 55px;
    height: 55px;
  }
  .burger-icon{
    height: 14px;
    width: 28px;
  }
  .burger-icon.active span:nth-child(1){
    top: 6px;
  }
  .nav-link{
    font-size: 25px;
  }
}
@media screen and (max-width: 550px){
  .burger-btn{
    width: 48px;
    height: 48px;
  }
  .burger-icon.active span:nth-child(1){
    top: 5px;
  }
  .burger-icon.active span:nth-child(2){
    bottom: 4px;
  }
  .burger-icon{
    width: 22px;
    height: 11px;
  }
  .header_logo img{
    height: 48px;
  }
}
</style>
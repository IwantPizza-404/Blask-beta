<script>
export default{

}
</script>

<template>
    <section id="about" class="sec-about">
        <div class="container">
            <div class="about_wrapp">
                <div 
                    class="about_content"
                    data-aos="sld-right"
                    data-aos-duration="300"
                    data-aos-delay="400"
                >
                    <div class="about-title">
                        <div class="sec-tag sec-title_dot">About</div>
                        <h2 class="about_title sec-title">The reasons working with me...</h2>
                    </div>
                    <div class="about-desc">
                        <p>I bring a blend of expertise and client-focused dedication to ensure your web development needs are not just met but exceeded. Let's create something exceptional together.</p>
                    </div>
                </div>
                <div class="about_features">
                    <div
                        class="feature-card"
                        data-aos="zoom-cus"
                        data-aos-duration="300"
                        data-aos-delay="700"
                    >
                        <h3 class="card-title feature-plus">04</h3>
                        <h4 class="card-subtitle">Years of experience</h4>
                    </div>
                    <div 
                        class="feature-card"
                        data-aos="zoom-cus"
                        data-aos-duration="300"
                        data-aos-delay="700"
                    >
                        <h3 class="card-title feature-plus">50</h3>
                        <h4 class="card-subtitle">Completed projects</h4>
                    </div>
                    <div 
                        class="feature-card"
                        data-aos="zoom-cus"
                        data-aos-duration="300"
                        data-aos-delay="700"
                    >
                        <h3 class="card-title feature-plus">70</h3>
                        <h4 class="card-subtitle">Satisfied customers</h4>
                    </div>
                    <div 
                        class="feature-card"
                        data-aos="zoom-cus"
                        data-aos-duration="300"
                        data-aos-delay="700"
                    >
                        <h3 class="card-title feature-plus">04</h3>
                        <h4 class="card-subtitle">Years of experience</h4>
                    </div>
                    <span 
                        class="f-decor"
                        data-aos="bright"
                        data-aos-duration="400"
                        data-aos-delay="300"
                    >
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    /* .sec-about{
    } */
    .about_wrapp{
        display: flex;
        gap: 50px;
    }
    .about_content{
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 60px;
    }
    .about-title{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .sec-tag{
        font-size: 24px;
        font-weight: 600;
        border-radius: 15px;
        border: 2px solid #fff;
        padding: 7px 20px;
        width: fit-content;
    }
    .about-desc p{
        font-size: 24px;
        font-weight: 300;
    }

    .about_features{
        display: flex;
        height: max-content;
        flex-wrap: wrap;
        gap: 20px;
        flex: 1;
        height: auto;
        position: relative;
        min-width: 500px;
    }
    .feature-card{
        display: flex;
        border-radius: 25px;
        border: 2px solid #fff;
        background: var(--alpha-bg);
        backdrop-filter: blur(32px);
        flex-direction: column;
        padding: 40px;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: auto;
    }
    .card-title{
        font-size: 40px;
        font-weight: 500;
        line-height: 120%;
    }
    .card-subtitle{
        text-align: center;
        font-size: 25px;
        font-weight: 400;
        line-height: 120%;
    }
    .feature-plus::after{
        content: "+";
        color: var(--accent-color);
    }

    .f-decor{
        position: absolute;
        width: 200px;
        height: 200px;
        filter: blur(55px);
        opacity: 0.5;
        background: linear-gradient(var(--accent-color), #fff);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        border-radius: 50%;
    }

    [data-aos='sld-right'] {
        transform: translateX(-5%);
        opacity: 0;
        transition-property: transform, opacity;
    }

    [data-aos='sld-right'].aos-animate {
        transform: translateX(0);
        opacity: 1;
    }

    [data-aos='zoom-cus']{
        transform: scale(0.95);
        opacity: 0;
        transition-property: transform, opacity;
    }

    [data-aos='zoom-cus'].aos-animate{
        transform: scale(1);
        opacity: 1;
    }

    [data-aos='bright']{
        opacity: 0;
        transition-property: transform, opacity;
    }

    [data-aos='bright'].aos-animate{
        opacity: .5;
    }


    @media screen and (max-width: 1150px){
        .about_wrapp{
            flex-direction: column;
        }
        .feature-card{
            flex: calc(50% - 20px);
            min-width: 0;
            padding: 40px 55px;
        }
    }
    @media screen and (max-width: 675px){
        .sec-tag, .about-desc p{
            font-size: 22px;
        }
        .feature-card{
            padding: 30px 35px;
        }
        .card-title{
            font-size: 38px;
        }
        .card-subtitle{
            font-size: 24px;
        }
        .about_features{
            min-width: 0;
        }
    }
    @media screen and (max-width: 550px){
        .about_features{
            flex-direction: column;
        }
        .feature-card{
            flex-direction: row;
            gap: 15px;
            padding: 20px 30px;
        }
        .card-subtitle{
            text-align: left;
            width: min-content;
        }
        .sec-tag{
            font-size: 20px;
            padding: 7px 18px;
        }
        .about_content{
            gap: 45px;
        }
        .about_wrapp{
            gap: 35px;
        }
    }
    @media screen and (max-width: 420px){
        .feature-card{
            padding: 20px 25px;
        }
        .card-subtitle{
            line-height: 110%;
        }
    }
</style>
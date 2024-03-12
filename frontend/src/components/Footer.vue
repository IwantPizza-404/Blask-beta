<script>
export default{
    data(){
        return {
            email: '',
            message: '',
            submittedMessage: null,
            IsMessaged: sessionStorage.getItem('IsMessaged') === 'true',
        };
    },
    methods:{
        async submitMessage() {
            try{
                const response = await this.$axios.post('http://localhost:3000/api/messages', {
                    email: this.email,
                    message: this.message,
                });

                if (response.status === 200) {
                    this.submittedMessage = response.data;
                    sessionStorage.setItem('IsMessaged', 'true');
                    this.IsMessaged = true;
                } 
                else {
                    console.error('Error submitting message:', response.statusText);
                }
            } 
            catch(error){
                console.error('Error submitting message:', error);
            }
        },
    }
}
</script>

<template>
    <footer class="footer-sec">
        <div class="container">
            <div class="footer_wrapp">
                <div class="footer-content">
                    <h2 
                        class="footer-title sec-title"
                        data-aos="sld-right"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >Got a project ?<br>Let’s talk</h2>
                    <div 
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >
                        <a class="email-link" href="mailto: safarov.1513@gmail.com">
                            <span class="email-content"></span>
                            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1.76782" width="28.6066" height="28.6066" rx="9" stroke="white" stroke-width="2"/>
                                <path d="M9.29289 20.6674C8.90237 21.0579 8.90237 21.6911 9.29289 22.0816C9.68342 22.4721 10.3166 22.4721 10.7071 22.0816L9.29289 20.6674ZM21.6066 10.7679C21.6066 10.2156 21.1589 9.76791 20.6066 9.76791H11.6066C11.0543 9.76791 10.6066 10.2156 10.6066 10.7679C10.6066 11.3202 11.0543 11.7679 11.6066 11.7679H19.6066V19.7679C19.6066 20.3202 20.0543 20.7679 20.6066 20.7679C21.1589 20.7679 21.6066 20.3202 21.6066 19.7679V10.7679ZM10.7071 22.0816L21.3137 11.475L19.8995 10.0608L9.29289 20.6674L10.7071 22.0816Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                    <div 
                        class="bg-asset"
                        data-aos="zoom-cus"
                        data-aos-duration="500"
                        data-aos-delay="800"
                    >
                        <svg width="166" height="238" viewBox="0 0 166 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.9872 1.71834C-14.1114 18.5047 2.35909 141.966 2.35909 141.966C2.35909 141.966 101.33 274.237 149.736 228.313C186.33 193.595 149.736 99.0545 149.736 99.0545C149.736 99.0545 94.6755 -15.251 39.9872 1.71834Z" fill="url(#paint0_linear_90_18)" fill-opacity="0.8"/>
                            <defs>
                                <linearGradient id="paint0_linear_90_18" x1="83" y1="0" x2="83" y2="238" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DBF52F"/>
                                    <stop offset="1" stop-color="white"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <form 
                    @submit.prevent="submitMessage"
                    class="footer-form"
                    data-aos="fade"
                    data-aos-duration="500"
                    data-aos-delay="600"
                >
                    <div v-if="IsMessaged" class="form_state">
                        <div class="state_icon">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="48.75" stroke="white" stroke-width="2.5"/>
                                <path d="M26.1802 51.8198L41.7365 67.3762L73.5563 35.5563" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3 class="state_title">Your message has been sent successfully!</h3>
                    </div>
                    <div v-if="!IsMessaged" class="form_content">
                        <div class="form-inputs">
                            <input 
                                v-model="email"
                                id="email" 
                                class="form_input" 
                                type="email" 
                                name="email" 
                                placeholder="E-mail"
                                required
                            >   
                            <input 
                                v-model="message"
                                id="message" 
                                class="form_input" 
                                type="text" 
                                placeholder="Message"
                                required
                            >
                        </div>
                        <button type="submit" class="send-btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer-sec{
        padding: 280px 0 145px 0;
    }
    .footer_wrapp{
        display: flex;
        gap: 135px;
        justify-content: space-between;
    }
    .footer-content{
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 65px;
        flex: 1;
        max-width: fit-content;
        min-width: fit-content;
    }
    .footer-title{
        line-height: 130%;
        font-weight: 500;
    }
    .email-link{
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 32px;
        font-weight: 400;
        width: fit-content;
        transition: .3s ease;
    }
    .email-link:hover{
        opacity: 0.6;
    }
    .email-content::after{
        content: 'safarov.1513@gmail.com';
    }

    .footer-form{
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: 500px;
    }

    .form_content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }

    .form_state{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: 280px;
        animation: fade .5s ease-out;
    }

    .state_icon svg path{
        animation: check .7s ease-in-out;
    }

    .state_title{
        font-size: 30px;
        line-height: 110%;
        text-align: center;
        max-width: 500px;
        width: fit-content;
    }

    .form-inputs{
        display: flex;
        flex-direction: column;
        gap: 35px;
        width: 100%;
    }
    .form_input::placeholder{
        color: #fff;
    }
    .form_input{
        background: transparent;
        border: none;
        height: 65px;
        border-bottom: 2px solid #fff;
        border-radius: 0;
        outline: none;
        font-size: 24px;
        color: #fff;
        padding: 20px 0px;
    }
    .send-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #fff;
        border-radius: 15px;
        width: 100%;
        font-size: 26px;
        font-weight: 400;
        color: #fff;
        height: 65px;
    }
    .bg-asset{
        position: absolute;
        top: -30px;
        left: -30px;
        z-index: -1;
        filter: blur(60px);
    }

    [data-aos='zoom-cus']{
        transform: scale(0.4);
        opacity: 0;
        transition-property: transform, opacity;
    }

    [data-aos='zoom-cus'].aos-animate{
        transform: scale(1);
        opacity: 1;
    }

    [data-aos='sld-right']{
        transform: translateX(-10%);
        opacity: 0;
        transition-property: transform, opacity;
    }

    [data-aos='sld-right'].aos-animate{
        transform: translateX(0%);
        opacity: 1;
    }

    @keyframes check {
        0%{
            clip-path: inset(0 100% 0  0);
        }
        100%{
            clip-path: inset(0);
        }
    }

    @keyframes fade {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    @media screen and (max-width: 1135px){
        .footer_wrapp{
            flex-direction: column;
        }
        .footer-content, .footer-form{
            max-width: 100%;
        }
        .send-btn{
            max-width: 50%;
        }
    }
    @media screen and (max-width: 950px){
        .send-btn{
            max-width: 100%;
        }
    }
    @media screen and (max-width: 675px){
        .footer-content{
            gap: 35px;
        }
        .email-link{
            font-size: 26px;
            gap: 5px;
        }
        .email-content::after{
            content: 'Email Me';
        }
        .email-link svg{
            height: 26px;
        }
        .footer_wrapp{
            gap: 75px;
        }
        .footer-sec{
            padding: 240px 0 75px 0;
        }
        .send-btn{
            font-size: 25px;
            height: 60px;
        }
        .state_title{
            font-size: 26px;
            max-width: 400px;
        }
        .state_icon svg{
            width: 90px;
            height: 90px;
        }
    }
    @media screen and (max-width: 550px){
        .form_input{
            font-size: 22px;
            height: 58px;
        }
        .send-btn{
            height: 58px;
            font-size: 24px;
        }
        .form_state{
            gap: 15px;
        }
        .state_title{
            font-size: 24px;
            max-width: 400px;
        }
        .state_icon svg{
            width: 75px;
            height: 75px;
        }
    }
</style>
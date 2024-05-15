<!-- LoginPage.vue -->
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios.post('/api/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        // Redirect to admin page upon successful login
        this.$router.push('/admin');
      })
      .catch(error => {
        console.error('Login error:', error.response.data.message);
      });
    }
  }
}
</script>

<template>
  <section class="login-page">
    <div class="container">
      <div class="login-wrapp">
        <div class="login-board">
          <h2 class="login-title">Login</h2>
          <form class="login-form" @submit.prevent="login">
            <div class="login_inputs">
              <input type="text" id="username" class="login_input" placeholder="Login" required v-model="username">
              <input type="password" id="password" class="login_input" placeholder="Password" required v-model="password">
            </div>
            <button class="submit-btn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.login-page{
  height: 100vh;
}
.login-wrapp{
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-board{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  border-radius: 25px;
  border: 2px solid #fff;
  background: var(--alpha-bg);
  backdrop-filter: blur(32px);
  max-width: 300px;
  width: 100%;
  padding: 45px 30px;
}
.login-title{
  font-size: 36px;
}
.login_inputs{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.login_input::placeholder{
  color: #fff;
}
.login_input{
  background: transparent;
  border: none;
  height: 50px;
  width: 100%;
  border-bottom: 2px solid #fff;
  border-radius: 0;
  outline: none;
  font-size: 20px;
  color: #fff;
  padding: 15px 0;
}
.submit-btn{
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 0 25px;
  height: 45px;
  border-radius: 15px;
  border: 2px solid #fff;
  color: #fff;
}
.login-form{
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}
</style>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      messages: []
    }
  },
  created() {
    this.fetchMessages()
  },
  methods: {
        fetchMessages() {
        axios.get('/api/messages')
            .then(response => {
                this.messages = response.data;
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
            })
        }
    }
}

</script>

<template>
    <section class="admin-page">
        <div class="container">
            <div class="admin-page_wrapp">
                <h2 class="sec-title">Admin Page</h2>
                <ul>
                    <li v-for="message in messages" :key="message.id">
                        {{ message.email }}: {{ message.message }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style>

</style>  
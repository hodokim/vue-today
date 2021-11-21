<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID : </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">PW : </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="subimit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.logMessage = `${data.user.username} 님 환영합니다.`;
        this.initForm();
      } catch (error) {
        console.log(error.response.data);
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>

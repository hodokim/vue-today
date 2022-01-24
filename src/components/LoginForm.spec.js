import { shallowMount } from '@vue/test-utils';
//import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다...', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'testte@st.com',
        };
      },
    });
    // const idInput = wrapper.find('#username');

    console.log(wrapper.vm.isUsernameValid);
  });
});

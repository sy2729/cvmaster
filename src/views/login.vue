<template>
  <div>
    <transition name="alert">
    <v-alert v-if="loading" alertText="Log In"></v-alert>
    <v-alert v-if="userNameWrong" alertText="Username format wrong"></v-alert>
    </transition>
    <div class="center-box flex flex-justify-center login">
        <div class="cover">
          <img :src="url" alt="img">
        </div>
        <div class='content flex-auto'>
            <h1 class="t-center">Log In</h1>
            <form action="">
              <v-input input-title='Username' class="dis-30" v-model=username></v-input>
              <v-input input-title='Passwords' input-type="password" class="dis-30" v-model=password></v-input>
              <v-button button-text="Log In" class="btn-full-width dis-40" @click=submit></v-button>
            </form>
            <router-link to="/register">Don't have account? Register</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import vInput from "@/components/basic/input.vue";
import vButton from "@/components/basic/button.vue";
import vAlert from "@/components/basic/alert.vue";
import { validate } from '@/components/mixins/formValidation';

export default {
  data(){
    return {
      url:'https://cdn.dribbble.com/users/329207/screenshots/5104800/2009_oldetowne_dribbble.jpg',
      username: undefined,
      password: undefined,
      loading: false,
      userNameWrong: false
    }
  },
  mixins: [validate],
  methods:{
    submit(){
      // check the username format
      this.userNameWrong = this.checkName(this.username);
      // check the password
      if(this.userNameWrong === false) {
        this.loading = true;
        // check the password from database:

      } 
      
    }
  },


  components: {
    vInput,
    vButton,
    vAlert
  }
}
</script>


<style lang="scss">
  
  .login {
    min-width: 350px;
    width: 60%;
    max-width: 700px;
    // height: 400px;
  }

  .cover {
    width: 40%;
    min-width: 150px;
  }

  @media screen and (max-width: 800px){
    .cover {display: none;}
  }

.alert-enter-active, .alert-leave-active {
  transform:  translateX(-50%) translateY(10px) !important;
  transition: all .5s;
  
}
.alert-enter, .alert-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-50%) translateY(-20px) !important;
  opacity: 0;
}

</style>


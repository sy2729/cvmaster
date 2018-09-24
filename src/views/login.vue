<template>
  <div>
    <transition name="alert">
      <v-alert v-if="alert.loading" alertText="Log In"></v-alert>
      <v-alert v-if="alert.userNameWrong" alertText="Email format wrong" alertType="error"></v-alert>
      <v-alert v-if="alert.inputNull" alertText="Input can't be null" alertType="error"></v-alert>
      <v-alert v-if="alert.serverError" :alertText='alert.serverErrorMessage' alertType="error"></v-alert>
      <v-alert v-if="alert.success" alertText='Login Successfully' alertType="success"></v-alert>
    </transition>
    <div class="center-box flex flex-justify-center login">
        <div class="cover">
          <img :src="url" alt="img">
        </div>
        <div class='content flex-auto'>
            <h1 class="t-center">Log In</h1>
            <form action="">
              <v-input input-title='Email' class="dis-30" v-model=username @focus='focus'></v-input>
              <v-input input-title='Passwords' input-type="password" class="dis-30" v-model=password @focus='focus'></v-input>
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

      // alert state management
      alert: {
        loading: false,
        userNameWrong: false,
        inputNull: false,
        serverErrorMessage: '',
        serverError: false,
        success: false,
      },
    }
  },
  mixins: [validate],
  methods:{
    submit(){
      // make sure no empty value
      this.alert.inputNull = this.checkNull(this.username) || this.checkNull(this.password)
      if(this.alert.inputNull){return}

      // check the username format
      this.alert.userNameWrong = this.checkName(this.username);
      if(this.alert.userNameWrong){return}

      // check the password from database:
      if(!this.alert.inputNull && !this.alert.userNameWrong) {this.login(this.username, this.password)}
      
    },
    login(name, password){
      this.alert.loading = true;
      this.AV.User.logIn(name, password)
      .then((loggedInUser)=> {
        this.clearAlert();
        this.success = true;
        console.log(loggedInUser);
        // this.$router.push({ path: `/user/${userId}` })
      }, (error)=> {
        this.alert.serverErrorMessage = error.rawMessage;
        this.alert.serverError = true;
      });
    },

    clearAlert(){
      for (let key in this.alert) {
        this.alert[key] = false;
      }
    },

    focus(){
      this.clearAlert();
    }
  },


  components: {
    vInput,
    vButton,
    vAlert
  },
  created(){
    this.getUser();
    this.changeBackground(this);
  }
}
</script>


<style lang="scss">
  
  .login {
    min-width: 300px;
    width: 60%;
    max-width: 700px;
    background: #f4f4f4;
    // height: 400px;
  }

  .cover {
    width: 40%;
    min-width: 150px;
    overflow: hidden;

    img {
        // animation: scale 4s alternate infinite;
        @include animation(scale);
        animation-duration: 6s;
        object-fit: cover;
        height: 100%;
    }
  }

  @media screen and (max-width: 800px){
    .cover {display: none;}
    body {
        height: 100vh;
        background: url(https://cdn.dribbble.com/users/329207/screenshots/5104800/2009_oldetowne_dribbble.jpg) no-repeat;
        background-size: cover; 
    }
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


<template>
  <div>
    <transition name="alert">
        <v-alert v-if="loading" alertText="Registering"></v-alert>
    </transition>
    <transition name="alert">
        <v-alert v-if="userNameWrong" alertText="Username format wrong"></v-alert>
    </transition>
    <transition name="alert">
        <v-alert v-if="!passwordConsistent" alertText="Password Inconsistent"></v-alert>
    </transition>

    <div class="center-box flex flex-justify-center login">
        <div class="cover">
            <img :src="url" alt="img">
        </div>
        <div class='content flex-auto'>
            <h1 class="t-center">Register</h1>
            <form action="">
                <v-input input-title='Username' class="dis-30" :bind=username @input="inputUsername($event)" @focus="showNamePrompt"></v-input>
                <v-input input-title='Passwords' input-type="password" class="dis-30" v-model=password @focus="showPasswordPrompt" :bind=password @input="inputPassword($event)"></v-input>
                <v-input input-title='Confirm' input-type="password" class="dis-30" v-model=passwordSecond @focus="clearPrompt"></v-input>
                <v-button button-type="success" button-text="Register" class="btn-full-width dis-40" @click=submit></v-button>
            </form>
            <router-link to="/login">Already have account? Log In</router-link>
        </div>
    </div>

    <div class="prompt-wrap">
        <transition-group name="prompt" appear mode="in-out">
            <prompt v-if="nameFormatPrompt" :prompt="nameFormat" key='name'></prompt>
            <prompt v-if="passwordFormatPrompt" :prompt="passwordFormat" key='password'></prompt>
        </transition-group>
    </div>
  </div>
</template>

<script>
import vInput from "@/components/basic/input.vue";
import vButton from "@/components/basic/button.vue";
import vAlert from "@/components/basic/alert.vue";
import prompt from "@/components/basic/prompt.vue";
import { validate } from '@/components/mixins/formValidation';

export default {
  data(){
    return {
      url:'https://cdn.dribbble.com/users/329207/screenshots/5284186/bemocs_db_dribbble_02_trail_angel.jpg',
      username: undefined,
      password: undefined,
      passwordSecond: undefined,
      loading: false,
      userNameWrong: false,
      passwordConsistent: true,
      nameFormatPrompt: false,
      passwordFormatPrompt: false,
      nameFormat: ['Use your email to register'],
      passwordFormat: [
          'Longer than 6 digits',
          'Combined with number and letter',
          'The first letter must be capitalized'
      ]
    }
  },
  mixins: [validate],
  methods:{
    submit(){
        // check the username format
        this.userNameWrong = this.checkName(this.username);
        // check the password format
        this.passwordConsistent = this.checkPasswordConsistency(this.password, this.passwordSecond);
        
        // register in database
        if(!this.userNameWrong && this.passwordConsistent) {
            this.loading = true;
        }
    
    },

    showNamePrompt(){
        this.passwordFormatPrompt=false;
        this.nameFormatPrompt=true
    },

    showPasswordPrompt(){
        this.passwordFormatPrompt=true;
        this.nameFormatPrompt=false;
    },

    inputUsername(data) {
        this.username = data;
        if(!this.checkName(data)) {this.clearPrompt();}
    },

    inputPassword(data) {
        this.password = data;
        if(this.checkPassword(data)) {this.clearPrompt();}
    },
    
    clearPrompt(){
        this.nameFormatPrompt = false;
        this.passwordFormatPrompt = false;
    }
    
  },


  components: {
    vInput,
    vButton,
    vAlert,
    prompt,
  }
}
</script>


<style lang="scss">
  
  .login {
    min-width: 350px;
    width: 60%;
    max-width: 700px;
  }

  .cover {
    width: 40%;
    min-width: 150px;
  }

  @media screen and (max-width: 800px){
    .cover {display: none;}
  }
  @media screen and (max-width: 1200px){
    .prompt-wrap {
      display: none;
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

  .prompt-wrap {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 100px;
  }

  .prompt-enter-active, .prompt-leave-active {
    transition: all .5s;
    
  }
  .prompt-enter, .prompt-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }


</style>


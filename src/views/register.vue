<template>
  <div>
    <transition name="alert">
        <v-alert v-if="success" alertText="Successfuly Registered" alertType="success"></v-alert>
        <v-alert v-if="loading" alertText="Registering"></v-alert>
        <v-alert v-if="inputNull" alert-text="Must Fill Out All" alertType="error"></v-alert>
        <v-alert v-if="userNameWrong" alertText="Username format wrong" alertType="error"></v-alert>
        <v-alert v-if="!passwordFormateRight" alertText="Password Format Wrong" alertType="error"></v-alert>
        <v-alert v-if="!passwordConsistent" alertText="Password Inconsistent" alertType="error"></v-alert>
        <v-alert v-if="serverError" :alert-text="serverErrorMessage" alertType="error"></v-alert>
    </transition>

    <div class="center-box flex flex-justify-center login">
        <div class="cover">
            <img :src="url" alt="img">
        </div>
        <div class='content flex-auto'>
            <h1 class="t-center">Register</h1>
            <form action="">
                <v-input input-title='Name' class="dis-30" v-model=name></v-input>
                <v-input input-title='Email' class="dis-30" :bind=username @input="inputUsername($event)" @focus="showNamePrompt"></v-input>
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
      name: '',
      username: '',
      password: '',
      passwordSecond: '',
//   state used to alert
      inputNull: false,
      loading: false,
      userNameWrong: false,
      passwordConsistent: true,
      passwordFormateRight: true,
      success: false,
      serverError: false,
      serverErrorMessage: '',
// state used to prompt
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
        // make sure no empty value
        this.inputNull = this.checkInputEmpty();
        if(this.inputNull){return}

        // check the username format
        this.userNameWrong = this.checkName(this.username);
        if(this.userNameWrong){return}

        // check the password format
        this.passwordFormateRight = this.checkPassword(this.password);
        if(!this.passwordFormateRight){return}

        // check password consistency
        this.passwordConsistent = this.checkPasswordConsistency(this.password, this.passwordSecond);
        if(!this.passwordConsistent){return}

        // register in database
        if(!this.userNameWrong && this.checkPassword(this.password) && this.passwordConsistent) {
            this.loading = true;
            this.createUser(this.name, this.username, this.password);
        }
    
    },

    checkInputEmpty(){
        return this.checkNull(this.name) || this.checkNull(this.username) || this.checkNull(this.password) || this.checkNull(this.passwordSecond)
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
        if(!this.checkName(data)) {this.clearPrompt(); this.clearAlert()}
    },

    inputPassword(data) {
        this.password = data;
        if(this.checkPassword(data)) {
            this.clearPrompt();
            this.clearAlert();
        }
    },
    
    clearPrompt(){
        this.nameFormatPrompt = false;
        this.passwordFormatPrompt = false;
    },

    clearAlert(){
      this.inputNull = false;
      this.loading = false;
      this.userNameWrong = false;
      this.passwordConsistent = true;
      this.passwordFormateRight = true;
    },
    createUser(name, email, key) {
        console.log('creating user')
            // 新建 AVUser 对象实例
            var user = new this.AV.User();
            // 设置用户名
            user.setUsername(name);
            // 设置密码
            user.setPassword(key);
            // 设置邮箱
            user.setEmail(email);
            user.signUp().then((loggedInUser)=>{
                this.loading = false;
                this.success = true;
                this.$router.push('./');
            }, (error)=>{
                this.clearAlert();
                this.serverErrorMessage = error.rawMessage;
                this.serverError = true;
        });
    },
    
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
    min-width: 300px;
    width: 60%;
    max-width: 700px;
    background: #f4f4f4;
  }

  .cover {
    width: 40%;
    min-width: 150px;
    overflow: hidden;

    img {
        // animation: scale 4s alternate infinite;
        @include animation(scale);
        animation-duration: 6s;
    }
  }

  @media screen and (max-width: 800px){
    .cover {display: none;}
    body {
        height: 100vh;
        background: url(https://cdn.dribbble.com/users/329207/screenshots/5284186/bemocs_db_dribbble_02_trail_angel.jpg) no-repeat !important;
        background-size: cover !important; 
    }
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


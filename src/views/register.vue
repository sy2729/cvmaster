<template>
  <div class="center-box flex flex-justify-center login">
      <div class="cover">
        <img :src="url" alt="img">
      </div>
      <div class='content flex-auto'>
          <h1 class="t-center">Register</h1>
          <form action="">
            <v-input input-title='Username' class="dis-30" v-model=username></v-input>
            <v-input input-title='Passwords' input-type="password" class="dis-30" v-model=password></v-input>
            <v-input input-title='Confirm' input-type="password" class="dis-30" v-model=passwordSecond></v-input>
            <v-button button-type="" button-text="Register" class="btn-full-width dis-40" @click=submit></v-button>
          </form>
          <router-link to="/login">Already have account? Log In</router-link>
      </div>
  </div>
</template>

<script>
import VInput from "@/components/basic/input.vue";
import vButton from "@/components/basic/button.vue";

export default {
  data(){
    return {
      url:'https://cdn.dribbble.com/users/78489/screenshots/4966994/ramin_nasibov_logo__svrf_branding_logofolio_.png',
      username: undefined,
      password: undefined,
      passwordSecond: undefined,
    }
  },
  methods:{
    submit(){
      alert('submit' + this.username)  
    }
  },


  components: {
    VInput,
    vButton,
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


</style>


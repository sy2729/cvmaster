<template>
  <div>
    <transition name="alert">
    <v-alert v-if="loading" alertText="Log In"></v-alert>
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

export default {
  data(){
    return {
      url:'https://cdn.dribbble.com/users/78489/screenshots/4966994/ramin_nasibov_logo__svrf_branding_logofolio_.png',
      username: undefined,
      password: undefined,
      loading: false,
    }
  },
  methods:{
    submit(){
      this.loading = true;
      // alert('submit' + this.username)  
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


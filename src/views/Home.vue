<template>
  <div class="home">
    <v-nav :user = user></v-nav>
    <div v-if="user">
      Welcome, {{user.username}} <br>
    </div>
    <button @click="logout" v-if="user">Log out</button>
    <home-header></home-header>
    <home-body></home-body>
  </div>
</template>

<script>
// @ is an alias to /src
let AV = require('leancloud-storage');
// import fontawesome from '@fortawesome/fontawesome-free'
import vNav from '@/components/vNav.vue'
import homeHeader from '@/components/home-header.vue'
import homeBody from '@/components/home-body.vue'
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  data(){
    return {
      user: null
    }
  },

  methods: {
    logout() {
      AV.User.logOut().then(()=>{
        this.user = null;
      });
      alert('logged out')
    }
  },
  components: {
    vNav,
    homeHeader,
    homeBody,
    // HelloWorld
  },

  created(){
    var currentUser = AV.User.current();
    // console.log(currentUser)
    if(currentUser){this.user = {...currentUser.attributes, id: currentUser.id}};
    
    if(this.$router.currentRoute.name === 'home'){
      document.body.classList.add('home');
    }
  }
}
</script>

<style lang="scss">
  body {
    &.home {
      background: #FEFFFF !important;
      height: unset !important;
    }

  }
</style>


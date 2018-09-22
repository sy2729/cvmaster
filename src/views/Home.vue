<template>
  <div class="home">
    <div v-if="user">
      Welcome, {{user.username}} <br>
    </div>
    <button @click="logout" v-if="user">Log out</button>
    <router-link to="/login" v-if="!user">Login</router-link><br>
    <router-link to="/register" v-if="!user">Sign Up</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
let AV = require('leancloud-storage');
// import HelloWorld from '@/components/HelloWorld.vue'
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
    // HelloWorld
  },

  created(){
    var currentUser = AV.User.current();
    // console.log(currentUser)
    if(currentUser){this.user = {...currentUser.attributes, id: currentUser.id}};
    
  }
}
</script>

<style lang="scss">
  body {
    background: #FEFFFF !important;
    height: unset !important;
  }
</style>


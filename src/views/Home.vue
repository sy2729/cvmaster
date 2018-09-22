<template>
  <div class="home">

    <router-link to="/login">Login</router-link><br>
    <router-link to="/register">Sign Up</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
let AV = require('leancloud-storage');

export default {
  name: 'home',
  data(){
    return {
      user: {}
    }
  },
  components: {
    HelloWorld
  },

  created(){
    var currentUser = AV.User.current();
    this.user = {...currentUser.attributes, id: currentUser.id};
    console.log(this.user);
  }
}
</script>

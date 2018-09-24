<template>
  <div class="home">
    <v-nav :user = user></v-nav>
    <home-header></home-header>
    <home-body></home-body>
  </div>
</template>

<script>
// @ is an alias to /src

// import fontawesome from '@fortawesome/fontawesome-free'
import vNav from '@/components/vNav.vue'
import homeHeader from '@/components/home-header.vue'
import homeBody from '@/components/home-body.vue'
import { checkUser } from '@/components/mixins/checkUser';
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  data(){
    return {
      user: null
    }
  },
  mixins: [checkUser],
  methods: {

  },
  components: {
    vNav,
    homeHeader,
    homeBody,
    // HelloWorld
  },

  created(){
    this.getUser();
    this.changeBackground();
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


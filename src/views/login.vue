<template>
  <div class="center-box flex flex-justify-center login">
      <div class="cover">
        <img :src="url" alt="img">
      </div>
      <div class='content flex-auto'>
        <h1 class="t-center">Log In</h1>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      url:'https://cdn.dribbble.com/users/78489/screenshots/4966994/ramin_nasibov_logo__svrf_branding_logofolio_.png',
    }
  }
}
</script>


<style lang="scss">
  
  .login {
    min-width: 350px;
    width: 60%;
    max-width: 700px;
    height: 400px;
  }

  .cover {
    width: 50%;
  }

  @media screen and (max-width: 800px){
    .cover {display: none;}
  }

</style>


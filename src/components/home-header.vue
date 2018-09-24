<template>
    <div class='header'>
      <div class="header-cover">
        <img class="header-bg-cover" src="/bg-cover.png" alt="">
        <div class="title-wrap">
          <h1>CV MASTER</h1>
          <p>Your Online CV configuration Tool</p>
          <p>Are you still Struggling with Microsoft Word? Why not make your cv online?</p>
        </div>
        <div class="title-image">

        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'homeHeader',

}
</script>

<style lang="scss" scoped>
    .header {
      background: url('https://www.rd.com/wp-content/uploads/2016/03/01-more-productive-at-work-breakfast.jpg') no-repeat 50%;
      background-size: cover;
      width: 100%;
      height: 100vh;
      position: relative;
      z-index: 1;

      .header-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgb(157,205,224);
        background: linear-gradient(35deg, rgba(157,205,224,0.8211659663865546) 0%, rgba(29,103,181,0.7147233893557423) 47%, rgba(0,181,255,0.5886729691876751) 100%);

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        .header-bg-cover {
          position: absolute;
          bottom: 0;
        }

        .title-wrap {
          margin-top: -280px;
          color: #f4f4f4;
          max-width: 350px;
          text-align: left;
          
          h1 {
            padding: 20px 0;
          }
        }

        .title-image {
          width: 300px;
          position: relative;
          z-index: 3;
          bottom: -100px;

          // img {
          //   width: 100%;
          //   height: auto;
          //   transform: scale(2);
          // }
        }

      }
    }

    @media screen and (max-width: 648px){
        .title-wrap {
            margin-top: -100px !important;
        }
    }
</style>


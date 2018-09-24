<template>
    <div class="body-content">
      <div class="title-image-wrap">
        <img class='title-image' src="/title-img-1.png" alt="">
        <img class='title-image' src="/title-img-2.png" alt="">

        <div class="title-image-wrap-shaddow"></div>
      </div>

      <div class="content">
        
        <div class="feature-wrap flex flex-justify-center flex-wrap">
            <div v-for="i in features" :key=i.title class="feature-each">
                <font-awesome-icon :icon="i.icon" @click="showMenu = !showMenu"/>
                <h2>{{i.title}}</h2>        
                <p>{{i.description}}</p>
            </div>
        </div>
      </div>
    </div>
    
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLaptop, faLeaf, faPalette } from '@fortawesome/free-solid-svg-icons'
library.add([faLaptop, faLeaf, faPalette])
export default {
    name: 'homeBody',
    data(){
        return {
            features: [
                {
                    icon: 'laptop',
                    title: 'Connection Everywhere',
                    description: 'Now bring your resume to anyone with access to the internet'
                },
                {
                    icon: 'leaf',
                    title: 'Contribute to the Environment',
                    description: 'Your Employee would rarely take look at your paper resume nor save it. Now try amaze them with paperless attitude'
                },
                {
                    icon: 'palette',
                    title: 'Colorful Personalization',
                    description: 'Still using the old template? Try colorful individualized resume fit your mood'
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .body-content {
      width: 100%;
      position: relative;
      z-index: 2;
      // border: 10px solid red;

      
      .title-image-wrap {
        position: absolute;
        top: -500px;
        width: 400px;
        height: 700px;
        // overflow-y: hidden;

        right: 15%;
        .title-image-wrap-shaddow {
          // position: absolute;
          // bottom: 0;
          // width: 100%;
          // height: 100px;
          // background: rgb(255,255,255);
          // background: linear-gradient(356deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
        }

        .title-image {
          width: 70%;
          position: absolute;
          top: 0;
          left: 0;
          box-shadow: 6px 2px 100px 0 rgba(0, 0, 0, 0.3);

          &:nth-child(2) {
            top: -50px;
            left: 120px;
            transform: rotate(10deg);
          }
        }

      }

      img.bg-cover {
        width: 100%;
        object-fit: cover;
      }



      .content {
        background: #fff;
        position: relative;  
        padding-top: 100px;
        z-index: 4;

        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: -100px;
          width: 100%;
          height: 100px;
          background: rgb(255,255,255);
          background: linear-gradient(356deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
        }

        .feature-wrap {
            .feature-each {
                width: 300px;
                padding: 20px 10px;
                margin: 20px;

                svg {font-size: 3em;}
                
            }
        }
      }
    }

    @media screen and (max-width: 500px){
        .title-image-wrap {
            width: 230px !important;
            // transform: scale(0.8);
            top: -250px !important;
            right: unset !important;
        }
    }
</style>

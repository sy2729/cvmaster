<template>
    <div class="head flex flex-wrap">
        <div class="person-title">
            <div class="title-wrap">
                <p>Hello</p>
                <template-text :text='user.username' v-model="newData.username"></template-text>
                <h1>I'm {{user.username}}</h1>
                <p>{{user.role || 'Freelance Web Designer & Develoepr'}} </p>
            </div>
        </div>
        <div class="profile" :style="{'background-image': `url(${user.profile || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7Y35fkOhE9_CsiaZl37GEbQ4W_5ADic470YTpek42K_EMq47fA'})`}">
           
        </div>
    </div>
</template>

<script>
import templateText from '@/components/basic/template-text.vue';
import { submit } from '@/components/mixins/submitData';

export default {
    name: 'vHeader',
    props: ['user'],
    components: {
        templateText,
    },
    mixins: [submit],
    data(){
        return {
            newData: {
                username: '',
            }
        }
    }


}
</script>

<style lang="scss" scoped>
    .head {
        width: 100%;
        height: 100vh;
        .person-title {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            
            .title-wrap {
                text-align: left;
            }

            
        }

        .profile {
            width: 50%;
            background: transparent no-repeat center;
            background-size: cover;
        }
    }
</style>

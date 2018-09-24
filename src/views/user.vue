<template>
    <div>
        <div class="nav">
            <h1>CV MASTER</h1>
            <v-nav :user = user></v-nav>
        </div>
        <cv-template :user = user></cv-template>
    </div>
</template>

<script>
import { checkUser } from '@/components/mixins/checkUser';
import vNav from '@/components/vNav.vue';
import cvTemplate from '@/components/panels/cv-template.vue';

export default {
    name: 'user',
    mixins: [checkUser],
    components: {
        vNav,
        cvTemplate,
    },
    created(){
        this.getUser();
        if(this.user) {
            // alert('user exist')
        }else {
            this.$router.push('/')
        };
        this.changeBackground();
    }
}
</script>

<style lang="scss">
    .nav {
        color: #f4f4f4;
        background: $defaultTheme;
        h1 {padding: 10px 0;}
        position: relative;

        nav {
            position: absolute; right: 55px; top: 50%; transform: translateY(-50%); 
            .menu {
                margin: unset !important;
            }

            .menu-content {
                position: absolute;
            }
        }
    }
</style>

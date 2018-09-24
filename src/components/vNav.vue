<template>
    <nav>
        
        <div class="menu">
            <font-awesome-icon icon="bars" @click="showMenu = !showMenu"/>
            <div class="menu-content" v-if="showMenu">
                <router-link to="/login" v-if="!user">Login</router-link><br>
                <router-link to="/register" v-if="!user">Sign Up</router-link>
                <router-link :to="{ path: 'user', query: { id: this.user.id }}" v-if="user">My Panel</router-link><br>
                <button @click="logout" v-if="user">Log out</button>
            </div>
        </div>

    </nav>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars)
let AV = require('leancloud-storage');

export default {
    name: 'vNav',
    data(){
        return {
            showMenu: false,
        }
    },
    props: ['user'],
    methods: {
        logout() {
            AV.User.logOut().then(()=>{
                this.$props.user = null;  //not sure about this
                this.showMenu = false;
            });
            alert('logged out')
        }
    },
    created(){
        // console.log('ssssss')
    }
}
</script>

<style lang="scss">
    
    nav {
        // background: $defaultTheme;
        // height: 70px;
        position: relative;
        z-index: 3;

        .menu {
            float: right;
            text-align: right;
            margin: 20px 40px 0 0;
            width: 150px;
            // background: red;

            .fa-bars {
                font-size: 2em;cursor: pointer;
                &.hover {color: $defaultTheme;}
            }

            .menu-content {
                border: 1px solid $defaultTheme;
                width: 100%;
                padding: 10px;
                color: $defaultTheme;
                background: #fff;
                text-align: right;

                a {
                    display: block; padding: 5px;
                    &:hover {background: $defaultTheme; color: #fff;}
                }
            }
        }
    }
</style>


<template>
    <div>
        <v-button button-text="Edit" @click="changeMode('edit')"></v-button>
        <v-button button-text="save" @click="changeMode('display')"></v-button>
        <v-header :user='user' @data-from-child='getChildData($event)'></v-header>
    </div>
</template>

<script>
import { checkUser } from '@/components/mixins/checkUser';
import vHeader from '@/components/templates/template1/header.vue';
import vButton from '@/components/basic/button.vue';
import { Object } from 'leancloud-storage';

export default {
    name: 'template1',
    mixins: [checkUser],
    data(){
        return {
            mode: 'display',
            user:{},
        }
    },
    methods: {
        changeMode(data){
            this.mode = data;
            this.$eventHub.$emit('changeMode', data)
        },
        getChildData(data){
            
            // get the data and upload the view layer
            let newData = {};
            for(let i in data) {
                newData[i] = data[i];
            }
            window.Object.assign(this.user, newData);
        }
    },
    created(){
        this.getUser();
        if(!this.user) {
            this.$router.push('/')
        }else {

        };
        
    },
    components: {
        vHeader,
        vButton
    }
}
</script>

<style lang="scss" scoped>

</style>


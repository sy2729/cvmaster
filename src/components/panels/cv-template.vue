<template>
    <div>
        <div class="no-template flex flex-justify-center flex-align-center" v-if='!user.template'>
            <v-button button-type='primary' button-text="There is no record yet, creat your first one +" @click=createRecord></v-button>
        </div>
    </div>
</template>

<script>

import vButton from '@/components/basic/button.vue';

export default {
    name: 'cvTemplate',
    props: ['user'],
    methods: {
        createRecord() {
            
        }
    },


    components: {
        vButton,
    }
}
</script>

<style lang="scss" scoped>
    .no-template {
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100%;
        
        button {
            width: unset;
            padding: 5px 10px;
        }
    }
</style>

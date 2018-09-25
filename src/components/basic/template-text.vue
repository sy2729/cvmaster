<template>
    <div class="wrap">
        <p v-if='mode===`display`'>{{text}}</p>
        <v-input v-else @input="$emit('input', $event)"></v-input>
    </div>
</template>

<script>
import vInput from '@/components/basic/input.vue';
export default {
    name: 'templateText',
    props: ['text'],
    data(){
        return {
            mode: 'display',
            // inputValue: '',
        }
    },
    components: {
        vInput,
    },
    created(){
        this.$eventHub.$on('changeMode', (data)=>{
            this.mode = data;
        })
    }

}
</script>


<style lang="scss" scoped>

</style>

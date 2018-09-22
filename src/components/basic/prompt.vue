<template>
    <div class="prompt">
        <!-- <div v-if='typeof prompt ===Array'> -->
            <ul>
                <li v-for='(i, index) in prompt' :key=index>{{i}}</li>
            </ul>
        <!-- </div> -->

        <!-- <p v-else>{{prompt}}</p>
                {{prompt}}
        {{typeof prompt ===Array}} -->
    </div>
</template>

<script>
export default {
    name: 'prompt',
    props: ['prompt'],

    // updated(){
    //     console.log(this.$props)
    // }
}
</script>

<style lang="scss" scoped>
    .prompt {
        position: absolute;
        min-width:250px;
        right: 0;
        background: $loading;
        padding: 15px 10px;
        border-radius: 3px;
        color: #f4f4f4;
        text-align: left;
        ul {padding: 0 15px;}
    }
</style>



<template>
    <div>this is the template 1</div>
</template>

<script>
import { checkUser } from '@/components/mixins/checkUser';
export default {
    name: 'template1',
    mixins: [checkUser],


    created(){
        this.getUser();
        if(!this.user) {
            this.$router.push('/')
        }else {
            
        };
        
    }
}
</script>

<style lang="scss" scoped>

</style>


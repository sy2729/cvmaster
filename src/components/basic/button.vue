<template>
    <button :class="buttonType" @click="$emit('click')">{{buttonText}}</button>
</template>

<script>
export default {
    name: 'vButton',
    props: {
        buttonType: {
            type: String,
            default: 'primary'
        },
        buttonText: {
            type: String,
            default: 'button'
        }
    },
    // methods: {
    //     getClass(data) {
    //         switch(data) {
    //             case 'x':
    //                 code block
    //                 break;
    //             case y:
    //                 code block
    //                 break;
    //             default:
    //                 code block
    //         }
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    button {
        height: 40px;
        width: 100px;
        border: none;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        border-radius: 3px;
        // margin: 30px 0;
    }

    button:hover {box-shadow: 2px 2px 6px 0 rgba(100,100,100,.3);}

    button.primary {
        background: $primary;
        color: #fff;
    }
    button.danger {
        background: $defaultTheme;
        color: #fff;
    }
    button.success {
        background: $success;
        color: #fff;
    }

    button.btn-full-width {width: 100%;}
</style>

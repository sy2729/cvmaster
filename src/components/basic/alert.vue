<template>
    <div class="alert-wrap">
        <span :class="['icon', alertType]"></span>
        <span :class="['text', 'flex', 'flex-align-center', 'flex-justify-center', alertType]">{{alertText}}</span>
    </div>
</template>

<script>
export default {
    name: 'vAlert',
    props: {
        alertText: {
            type: String,
            default: 'alert'
        },
        alertType: {
            type: String,
            default: 'loading'
        }
    }
}
</script>

<style lang="scss" scoped>
    .alert-wrap {
        position: absolute;
        height: 30px;
        z-index: 3;
        display: flex;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);

        .icon{
            border-radius: 4px 0 0 4px;
            width: 30px;
            position: relative;
            &.loading {
                background: $loading;
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;bottom: 0;left: 0;right: 0;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    border-left: none;
                    border-top: none;
                    border-bottom: none;
                    transform: scale(0.6);    
                    animation: spin 1s infinite linear;

                }
                @keyframes spin {
                    from{transform: scale(0.6) rotate(0deg);}   
                    to{transform: scale(0.6) rotate(360deg);}   
                }
            }

            &.error {
                background: $error;
                &:before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    transform: rotate(45deg) scale(0.9);
                    background: #fff;
                    width: 3px;
                    height: 100%;
                }
                &:after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    transform: rotate(-45deg) scale(0.9);
                    background: #fff;
                    width: 3px;
                    height: 100%;
                }
            }

            &.success {
                background: $success;
                &:before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    transform: rotate(45deg) scale(0.9);
                    background: #fff;
                    width: 3px;
                    height: 60%;
                }
                &:after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    transform: rotate(-45deg) scale(0.9);
                    background: #fff;
                    width: 3px;
                    height: 100%;
                }
                
            }
        }

        .text {
            padding: 0 25px;
            min-width: 150px;
            border-radius: 0 4px 4px 0;
            min-width: 200px;
            display: flex;
            justify-content: center;
            color: #fefefe;

            &.loading {
                background: $loading;
                @include border($loading)
            }

            &.error {
                background: $error;
                // color: $defaultTheme;
                @include border($error)
            }

            &.success {
                background: $success;
                // color: $success;
                @include border($success)
            }
        }
    }
</style>

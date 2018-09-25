<template>
    <div class="input-wrap">
        <span v-if="inputTitle">{{inputTitle}}</span>
        <input :placeholder="inputTitle" :type="inputType" @input="$emit('input', $event.target.value)" :value="value" @focus="$emit('focus')">
    </div>
</template>

<script>
export default {
    name: 'vInput',
    props: {
        inputType: {
            type: String,
            default: "text",
        },
        inputTitle: String,
        value: {
            type: String,
        }

    },
}
</script>

<style lang="scss" scoped>
    .input-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {margin-right: 5px; min-width: 80px; text-align: right;}
    }
    input {
        font-size: inherit;
        border: 1px solid $border-light;
        height: 35px;
        padding: 4px;
        vertical-align: middle;
        flex: auto;
    }

    input:focus {outline: none;}
</style>


<template>
    <div>
        <span>{{inputTitle}}</span><input :type="inputType">
    </div>
</template>

<script>
export default {
    name: 'VInput',
    props: {
        inputType: {
            type: String,
            default: "text",
        },
        inputTitle: String,

    }
}
</script>

<style lang="scss" scoped>

</style>


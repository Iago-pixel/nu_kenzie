<template>
    <button class='button' @click='submit'>Inserir Valor</button>
</template>

<script>
    export default {
        methods: {
            submit() {
                this.$emit('submit')
            }
        }
    }
</script>


<style scoped>
    .button {
        color: white;
        background-color: #FD37E7;
        margin: 16px 0;
        padding: 16px;
        border: none;
        width: 272px;
        border-radius: 7px;
    }
</style>
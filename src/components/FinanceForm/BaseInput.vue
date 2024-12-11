<template>
    <input class="input" :placeholder="placeholder" :id="id" />
</template>

<script>
    export default {
        props: ['placeholder', 'id']
    }
</script>

<style scoped>
    .input {
        margin: 16px 0;
        padding: 16px;
        border: none;
        background-color: #F8F9FA;
        width: 240px;
        border-radius: 7px;
    }
    .input::placeholder {
        font-size: 16px;
    }
</style>

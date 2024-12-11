<template>
    <select class="select" :id="id">
        <option value="entry">Entrada</option>
        <option value="exit">Saída</option>
    </select>
</template>

<script>
    export default {
        props: ['id']
    }
</script>


<style scoped>
    .select {
        margin: 16px 0;
        padding: 16px;
        border: none;
        background-color: #F8F9FA;
        width: 272px;
        border-radius: 7px;
    }
</style>
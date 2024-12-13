<template>
    <select class="select" :id="id" @change="onChange" v-model="type">
        <option value="entry">Entrada</option>
        <option value="exit">Saída</option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                type: 'entry'
            }
        },
        props: ['id'],
        methods: {
            onChange() {
                this.$emit('on-change', this.type)
            }
        }
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
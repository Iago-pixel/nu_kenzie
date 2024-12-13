<template>
    <div :class="`card ${transaction.type === 'entry' ? 'border-entry' : 'border-exit'}`">
        <div>
            <h4 class="title">{{ transaction.description }}</h4>
            <p v-if="transaction.type === 'entry'" class="type">Entrada</p>
            <p v-else class="type">Saída</p>
        </div>
        <div class="right-card">
            <p class="value">R$ {{ transaction.value }}</p>
            <button @click="del" class="del-button">Excluir</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            transaction: Object
        },
        methods: {
            del() {
                this.$store.commit('storeTransactionsDelete', this.transaction)
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 240px;
        padding: 16px;
        border-radius: 7px;
        background-color: #F8F9FA;
        margin: 16px 0;
    }
    .border-entry {
        border-left: 3px solid #03B898;
    }
    .border-exit {
        border-left: 3px solid #E9E6EF;
    }
    .title {
        font-size: 16px;
        margin: 0;
    }
    .type, .value, .del-button {
        font-size: 12px;
    }
    .del-button {
        font-size: 12px;
        border-radius: 3px;
        border: none;
        background-color: #E9ECEF;
        padding: 4px 8px;
    }
    @media screen and (min-width: 768px) {
        .card {
            display: flex;
            justify-content: space-between;
            width: 350px;
        }
        .value {
            margin: 0 0 12px;
        }
        .right-card {
            text-align: right;
        }
    }
    @media screen and (min-width: 1024px) {
        .card {
            width: 600px;
        }
    }
</style>
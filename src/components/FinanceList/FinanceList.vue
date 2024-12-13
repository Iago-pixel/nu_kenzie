<template>
    <section class="finance-list" >
        <h3 class="title">Resumo financeiro</h3>
        <p class="text-no-list" v-if="$store.state.transactions.length === 0">Você ainda não possui nenhum lançamento</p>
        <ul class="list" v-else>
            <li v-for="transaction in $store.state.transactions" :key="transaction.id" class="item-list">
                <TransactionCard :transaction="transaction" />
            </li>
        </ul>
    </section>
</template>

<script>
import TransactionCard from './TransactionCard.vue';

    export default {
        components: {
            TransactionCard
        }
    }
</script>


<style scoped>
    .finance-list {
        max-width: 288px;
    }
    .title {
        font-size: 16px;
    }
    .text-no-list {
        font-size: 22px;
        font-weight: bold;
    }
    .list {
        padding: 0;
    }
    .item-list {
        list-style-type: none;
    }
    @media screen and (min-width: 768px) {
        .finance-list {
            max-width: none;
        }
    }
</style>
<template>
    <section class="finance-list">
        <h3 class="title">Resumo financeiro</h3>
        <p class="text">Você ainda não possui nenhum lançamento</p>
    </section>
</template>

<style scoped>
    .finance-list {
        max-width: 288px;
    }
    .title {
        font-size: 16px;
    }
    .text {
        font-size: 22px;
        font-weight: bold;
    }
    @media screen and (min-width: 768px) {
        .finance-list {
            max-width: none;
        }
    }
</style>
<template>
    <section class="total-box">
        <div class="flex-box">
            <h2 class="title">Valor total</h2>
            <p class="value">R$ {{ this.$store.getters.total }},00</p>
        </div>
        <p class="text">O valor se refere ao saldo</p>
    </section>
</template>

<style scoped>
    .total-box {
        border: 2px solid #F8F9FA;
        padding: 16px;
        max-width: 288px;
    }
    .flex-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        font-size: 22px;
        margin: 0;

    }
    .text {
        margin-bottom: 0;
    }
    .value {
        margin: 0;
        font-size: 22px;
        font-weight: bold;
        color: #FD37E7;
    }
</style>
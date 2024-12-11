<template>
    <section class="finance-form">
        <BaseInputBox forHtml="descripition">
            <template v-slot:title>
                Descrição
            </template>
            <BaseInput placeholder="Digite aqui sua descrição" id="descripition"/>
        </BaseInputBox>
        <p class="example">Ex: Compra de roupas</p>
        <BaseInputBox forHtml="value">
            <template v-slot:title>
                Valor (R$)
            </template>
            <BaseInput placeholder="1" id="value"/>
        </BaseInputBox>
        <BaseInputBox forHtml="type">
            <template v-slot:title>
                Tipo de valor
            </template>
            <BaseSelect id="type"/>
        </BaseInputBox>
        <BaseButton />
    </section>
</template>

<script>
    import BaseButton from './BaseButton.vue';
    import BaseInput from './BaseInput.vue';
    import BaseInputBox from './BaseInputBox.vue';
    import BaseSelect from './BaseSelect.vue';

    export default {
        components: {
            BaseInputBox,
            BaseInput,
            BaseSelect,
            BaseButton
        }
    }
</script>

<style scoped>
    .finance-form {
        border: 2px solid #E9E6EF;
        padding: 16px;
        margin: 16px 0;
        max-width: 288px;
    }
    .example {
        font-size: 16px;
        margin: 0;
        color: #B6BE96;
    }
</style>
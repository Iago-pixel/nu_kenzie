<template>
    <section class="finance-form">
        <BaseInputBox forHtml="descripition">
            <template v-slot:title>
                Descrição
            </template>
            <BaseInput placeholder="Digite aqui sua descrição" id="descripition" @value="updateDescription"/>
        </BaseInputBox>
        <p class="example">Ex: Compra de roupas</p>
        <BaseInputBox forHtml="value">
            <template v-slot:title>
                Valor (R$)
            </template>
            <BaseInput placeholder="1" id="value" type="number" @value="updateValue"/>
        </BaseInputBox>
        <BaseInputBox forHtml="type">
            <template v-slot:title>
                Tipo de valor
            </template>
            <BaseSelect id="type" @on-change="updateType"/>
        </BaseInputBox>
        <BaseButton @submit="submit"/>
    </section>
</template>

<script>
    import BaseButton from './BaseButton.vue';
    import BaseInput from './BaseInput.vue';
    import BaseInputBox from './BaseInputBox.vue';
    import BaseSelect from './BaseSelect.vue';

    export default {
        data() {
            return {
                data: {
                    id: 0,
                    description: '',
                    value: 0,
                    type: 'entry'
                }
            }
        },
        components: {
            BaseInputBox,
            BaseInput,
            BaseSelect,
            BaseButton
        },
        methods: {
            updateDescription(descripition) {
                this.data.description = descripition
            },
            updateValue(value) {
                this.data.value = Number(value)
            },
            updateType(type) {
                this.data.type = type
            },
            submit() {
                this.data.id += 1
                this.$store.commit('storeTransactions', this.data)
            }
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
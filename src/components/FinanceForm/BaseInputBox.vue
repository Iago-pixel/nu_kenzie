<template>
    <div class="base-input">
        <label class="label" :for='forHtml'>
            <h3 class="title">
                <slot name="title"></slot>
            </h3>
        </label>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['forHtml']
    }
</script>

<style scoped>
    .base-input {
        margin: 16px 0 0;
    }
    .title {
        margin: 0;
        font-size: 12px;
    }
</style>
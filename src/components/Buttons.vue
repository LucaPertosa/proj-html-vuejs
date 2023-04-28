<script>
export default {
    name: "Buttons",
    props: {
        color: String,
        text: String,
    }
}
</script>

<template>
    <button class="ms_btn" :class="color ? color : ''">{{text ? text.toUpperCase() : 'SEE ALL'}}</button>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partials/variables" as *;

.ms_btn {
    color: $btn-dark-txt;
    background-color: $btn-color-dark;
    padding: 10px 20px; 
    border-radius: 5px;
    border: 1px solid $btn-color-dark;
    &.light {
        background-color: $btn-color-light;
        border: 1px solid $btn-light-txt;
        color: $btn-light-txt;
    }
    &.footer {
        background-color: inherit;
        border: 1px solid $btn-light-txt;
        color: $btn-dark-txt;
    }
}
</style>
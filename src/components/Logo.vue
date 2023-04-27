<script>
export default {
    name: "Logo",
}
</script>

<template>
<div class="ms_logo">
    <p class="left-log">nex</p>
    <p class="right-log">gen</p>
</div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partials/variables" as *;

.ms_logo {
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 4px;
}
.left-log {
    padding: 12px 0 12px 30px;
    display: inline-block;
    background-color: $logo-bg;
    color: $logo-color;
    border-radius: 30px 0 0 30px ;
}
.right-log {
    padding: 15px 0 15px 2px;
    color: black;
    display: inline-block;
    background-color: transparent;
}
</style>
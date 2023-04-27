<script>
import AppHeader from './components/AppHeader.vue';
import SectionOne from './components/SectionOne.vue';
export default {
    components: {
        AppHeader,
        SectionOne,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <AppHeader/>
    <SectionOne />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/variables" as *;

</style>

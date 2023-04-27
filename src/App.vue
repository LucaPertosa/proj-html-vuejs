<script>
import AboutSection from './components/AboutSection.vue';
import AppHeader from './components/AppHeader.vue';
import HomeSection from './components/HomeSection.vue';
export default {
    components: {
        AppHeader,
        HomeSection,
        AboutSection,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <AppHeader/>
    <HomeSection />
    <AboutSection />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/variables" as *;

</style>

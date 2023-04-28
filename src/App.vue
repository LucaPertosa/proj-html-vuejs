<script>
import AppHeader from './components/AppHeader.vue';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import ProcessSection from './components/ProcessSection.vue';
import TeamSection from './components/TeamSection.vue';
import NewsSection from './components/NewsSection.vue';
import BlogSection from './components/BlogSection.vue';
import AppFooter from './components/AppFooter.vue'
export default {
    components: {
        AppHeader,
        HomeSection,
        AboutSection,
        ServicesSection,
        ProcessSection,
        TeamSection,
        NewsSection,
        BlogSection,
        AppFooter,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <AppHeader/>
    <HomeSection/>
    <AboutSection />
    <ServicesSection />
    <ProcessSection/>
    <TeamSection/>
    <NewsSection/>
    <BlogSection/>
    <AppFooter/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/variables" as *;

</style>

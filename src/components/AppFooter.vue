<script>
import Buttons from '../components/Buttons.vue';
import Logo from '../components/Logo.vue';
import { store } from '../store';
export default {
    name: "AppFooter",
    components: {
        Buttons,
        Logo,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="bg-img-b">
        <div class="container">
            <div class="ms_row-2">
                <div class="col-3" v-for="(elem, index) in this.store.nav2.footer" :key="index">
                    <div v-if="index === `home`">
                        <Logo :color="'light'"/>
                        <ul class="ms_white-text py-2">
                            <li v-for="(item,index) in elem" :key="index" class="py-2"> 
                                {{ item }}
                            </li>
                        </ul>
                        <Buttons :class="'footer'" :text="'get in touch'"/>
                    </div>
                    <div v-else-if="index !== 'home'">
                        <div class="footer-card">
                            <ul class="ms_white-text">
                                <li class="ms_upp"><h3 >{{ index }}</h3></li>
                                <li v-for="(item,index) in elem" :key="index" class="ms_upp"> 
                                    <i class="fa-solid fa-angle-right"></i>
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-d">
        <div class="container">
            <div class="row">
                <div class="col">
                    Enjoy the low price. We are tracking any intention of piracy.
                </div>
                <div class="col">
                    © 2020 NEXGEN is Proudly Powered by <span class="green">Codings</span>.
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;
.bg-d {
    background-color: $footer-card-bg;
    padding: $pad3;
    color: $header-info-color;
}
.green {
    color: $btn-color-dark;
}
.ms_upp {
    text-transform: capitalize;
}
.footer-card {
    max-width: fit-content;
    margin: 0 auto;
    background-color: $footer-card-bg;
    border-radius: $pad1;
    padding: $pad3;
}
</style>
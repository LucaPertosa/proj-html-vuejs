<script>
import Buttons from '../components/Buttons.vue';
import { store } from '../store';
export default {
    name: "ServicesSection",
    components: {
        Buttons
    },
    data() {
        return {
            store,
            services: store.nav2.services
        }
    },
    methods: {
        highlightWord(str, n, bol) {
            // divide la stringa in parole
            let words = str.split(" ");
            
            // verifica che il numero di parola scelto sia valido
            if (n >= words.length || n < 0) {
                return str;
            }
            
            if (bol === false) {
                // mette la parola scelta tra i tag <mark>
                words[n] = '<span class="green-select">' + words[n] + '</span>';
            } else {
                words[n] = '<span class="green-select green">' + words[n] + '</span>';
            }
            
            // ricostruisce la stringa con le parole evidenziate
            let highlightedStr = words.join(" ");
            
            return highlightedStr;
        },
    }
}
</script>

<template>
    <div class="bg-img-w" :id="'services'">
        <div class="container">
            <div class="col">
                <h6>{{this.services.sec}}</h6>
                <h2 class="ms_section-title-b" v-html="highlightWord(this.services.title, 2, true)">
                </h2>
                <p class="ms_white-text d-flex justify-content-between">
                    <span class="w-75">
                        {{this.services.parag}}
                    </span>
                    <span class="w-25 text-end">
                        <Buttons/>
                    </span>
                </p>
                <p class="ms_white-text ">
                </p>
            </div>
                <div class="ms_row-3">
                    <div class="ms_card" v-for="(elem, index) in this.services.box" :key="index">
                        <div class="ms_relative">
                            <i :class="elem.icon" class="services"></i>
                            <a href="">
                                <i class="fa-solid fa-arrow-right fa-2xl icons-clr ms_absolute"></i>
                            </a>
                        </div>
                        <h5 class="box-title">
                            {{index}}
                        </h5>
                        <p class="ms_white-text">{{elem.parag}}</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables" as *;
.bg-img-w {
    background-color: $services-section;
    z-index: -1;
    width: 100%;
    padding: $padYSec 0;
}
.ms_section-title-b {
    color: black;
    font-size: 3rem;
    font-weight: 700;
    text-transform: capitalize;
}
.ms_row-3 {
    display: flex;
    padding: $pad3 0;
    justify-content: space-between;
    flex-wrap: wrap;
}
.ms_card {
    width: calc(100% / 3 - 15px);
    padding: $pad3;
    margin-bottom: $pad3;
    border-radius: $pad2;
    background-color: white;
}
i.services {
    font-size: 3rem;
}
.ms_relative {
    padding: $pad3 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
<script>
import Buttons from '../components/Buttons.vue';
import { store } from '../store';
export default {
    name: "AboutSection",
    components: {
        Buttons
    },
    data() {
        return {
            store,
            about: store.nav2.about,
        }
    },
    methods: {
        highlightWord(str, n) {
            // divide la stringa in parole
            let words = str.split(" ");
            
            // verifica che il numero di parola scelto sia valido
            if (n >= words.length || n < 0) {
                return str;
            }
            
            // mette la parola scelta tra i tag <mark>
            words[n] = '<span class="green-select">' + words[n] + '</span>';
            
            // ricostruisce la stringa con le parole evidenziate
            let highlightedStr = words.join(" ");
            
            return highlightedStr;
        },
    }
}
</script>

<template>
    <div class="bg-img-b">
        <div class="container">
            <div class="ms_row-2">
                <div class="ms_col">
                    <h6>{{this.about.sec}}</h6>
                    <h2 class="ms_section-title" v-html="highlightWord(this.about.title, 0)">
                    </h2>
                    <p class="ms_white-text">
                        {{this.about.parag}}
                    </p>
                    <p class="ms_white-text">
                        {{this.about.underparag}}
                    </p>
                </div>
                <div class="ms_col">
                    <div class="box">
                        <div class="box-2" v-for="(elem, index) in this.about.box" :key="index">
                            <h5 class="box-title">
                                <i :class="elem.icon"></i>
                                 {{index}}</h5>
                            <p class="ms_white-text">{{elem.parag}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables" as *;
.bg-img-b {
    background-color: $about-section-bg;
    z-index: -1;
    width: 100%;
}
.green-select {
    background-color: rgba($logo-color, $alpha: 0.3);
    padding: 0.5rem 1rem ;
}
.ms_section-title {
    color: white;
    font-size: 3rem;
    font-weight: 700;
    text-transform: capitalize;
}
.ms_row-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: $padYSec 0;
}

h6 {
    text-transform: uppercase;
    color: $logo-color;
    padding: $pad3 0;
}

.ms_white-text {
    color: $header-info-color;
    margin: $pad3 0;
}
.box {
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
.box-2 {
    width: calc(50% - $pad3);
    margin-top: $pad3;
    margin-left: $pad3;
    height: 100%;
}
.box-title {
    font-size: 1.5rem;
    text-transform: capitalize;
}
.icons-clr {
    color: $logo-color;
}
.form-control {
    background-color: grey;
}
</style>
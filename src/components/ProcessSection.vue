<script>
import Buttons from '../components/Buttons.vue';
import { store } from '../store';
export default {
    name: "ProcessSection",
    components: {
        Buttons
    },
    data() {
        return {
            store,
            process: store.nav2.process
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
    <div class="bg-img-l" :id="'process'">
        <div class="col w-75 mx-auto ms_col text-center">
            <h6>{{this.process.sec}}</h6>
            <h2 class="ms_section-title-b" v-html="highlightWord(this.process.title, 0, true)">
            </h2>
            <p class="ms_white-text">
                {{this.process.parag}}
            </p>
        </div>
        <div class="ms_green"></div>
        <div class="process-row justify-content-around">
            <div class="process-col" v-for="(elem, index) in this.process.box" :key="elem.id">
                <div class="col">
                    <div class="dot">
                        0 {{ index + 1 }}
                    </div>
                </div>
                <h5 class="box-title">
                    {{elem.title}}
                </h5>
                <p class="ms_white-text">{{elem.parag}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;
.bg-img-l {
    background-color: white;
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
.ms_green {
    border: 3px solid $highline-var;
}
.ms_col {
    padding-bottom: $pad4;
}
.process-row {
    display: flex;
    margin: 0 auto;
    width: 90%;
}
.process-col {
    position: relative;
    z-index: 2;
    top: -45px;
    width: calc(100% / 5);
    text-align: center;
    padding: $pad3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.dot {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    font-size: 1.4rem;
    font-weight:600;
    color: $btn-color-dark;
    margin-bottom: 20px;
    background-color: $highline-var;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
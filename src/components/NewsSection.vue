<script>
import Buttons from '../components/Buttons.vue';
import { store } from '../store';
export default {
    name: "NewsSection",
    components: {
        Buttons
    },
    data() {
        return {
            store,
            news: store.nav2.news
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
    <div class="bg-img-l" :id="'blog'">
        <div class="container">
            <div class="col">
                <h6>{{this.news.sec}}</h6>
                <h2 class="ms_section-title-b" v-html="highlightWord(this.news.title, 1, true)">
                </h2>
                <p class="ms_white-text d-flex justify-content-between">
                    <span class="w-75">
                        {{this.news.parag}}
                    </span>
                    <span class="w-25 text-end">
                        <Buttons/>
                    </span>
                </p>
                <p class="ms_white-text ">
                </p>
            </div>
            <div class="row justify-content-around">
                <div class="col-4" v-for="(elem, index) in news.box">
                    <div class="card ms_border">
                        <img :src="elem.img" alt="" class="ms_cardimg">
                        <div class="ms_card-txt">
                            <h3>{{ index }}</h3>
                        </div>
                    </div>
                </div>
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
.card.ms_border {
    border: none;
}
.ms_cardimg {
    filter: grayscale(10%);
    border-radius: $pad2;
}
.ms_card-txt {
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    color: white;
    text-align: center;
    display: flex;
    justify-content: end;
    align-items: end;
    background-color: rgba($color: #000000, $alpha: .5);
    padding: $pad4;
    border-radius: $pad2;

}
</style>
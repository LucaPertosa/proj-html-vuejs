<script>
import Buttons from '../components/Buttons.vue';
import Nav from '../components/Nav.vue'
import { store } from '../store';
export default {
    name: "TeamSection",
    components: {
        Buttons,
        Nav,
    },
    data() {
        return {
            store,
            team: store.nav2.team,
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
            
            if (bol === true) {
                // mette la parola scelta tra i tag <mark>
                words[n] = '<span class="green-select">' + words[n] + '</span>';
            } else if (bol === false){
                words[n] = '<span class="green-select green">' + words[n] + '</span>';
            } else if(bol === '') {
                words[n] = '<span class="green-select dark">' + words[n] + '</span>';
            } else {
                words[n] = '<span class="green-select">' + words[n] + '</span>';
            }
            
            // ricostruisce la stringa con le parole evidenziate
            let highlightedStr = words.join(" ");
            
            return highlightedStr;
        },
        returnUrl(elem) {
            return "../assets/img/" + elem
        }
    }
}
</script>

<template>
    <div class="bg-img-b" :id="'team'">
        <div class="container">
            <div class="ms_row-2">
                <div class="ms_col-75">
                    <h6>{{this.team.sec}}</h6>
                    <h2 class="ms_section-title" v-html="highlightWord(this.team.title, 0, '')">
                    </h2>
                    <p class="ms_white-text">
                        {{this.team.parag}}
                    </p>
                    <div class="ms_col-100">
                        <div class="box">
                            <div class="team-box" v-for="(elem, index) in this.team.box" :key="index">
                                <div class="w-25">
                                    <img v-if="elem.img" :src="elem.img" :alt="index" class="box-img">
                                </div>
                                <div class="box-info">
                                    <h5 class="box-title">
                                        {{ index }}
                                    </h5>
                                    <p class="ms_white-text">{{elem.parag}}</p>
                                    <div class="contacts">
                                        <Nav :array="elem.contacts" :header="'team'"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ms_col-25">
                    <div class="ms_card-green">
                        <h3 class="ms_card-title white">President Speech</h3>
                        <p class="ms_white-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias debitis quo ullam?</p>
                        <p class="ms_white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et voluptas minus, blanditiis fuga eveniet est minima laudantium!</p>
                        <p class="ms_white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusantium incidunt reiciendis ratione eius harum tempora?</p>
                        <span class="d-flex justify-content-between">
                            <h4 class="white">
                                T.Johnson
                            </h4>
                            <div>
                                <i class="fa-solid fa-quote-right logo-color fa-2x"></i>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

.ms_col-100 {
    width: 100%;
}
.ms_col-75 {
    width: 75%;
}
.ms_col-25 {
    width: 25%;
}
.ms_card-green {
    width: 100%;
    padding: $pad4;
    background-color: $btn-color-dark;
    border-radius: $pad1;
}
.box-img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $pad1;
}
.box-info {
    width: 75%;
    padding: $pad3;
}
.logo-color {
    color: $header-info-color;
}
.bg-img-b {
    background-color: $about-section-bg;
    z-index: -1;
    width: 100%;
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
    justify-content: space-between;
    flex-wrap: wrap;
}
.team-box {
    width: calc(50% - $pad3);
    margin-bottom: $pad3;
    margin-right: $pad3;
    height: 100%;
    display: flex;
}
.box-title {
    font-size: 1.5rem;
    text-transform: capitalize;
}
.icons-clr {
    color: $btn-color-dark;
}
.form-control {
    background-color: grey;
}
</style>
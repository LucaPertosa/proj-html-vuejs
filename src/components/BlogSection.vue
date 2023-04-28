<script>
import Buttons from '../components/Buttons.vue';
import { store } from '../store';
export default {
    name: "BlogSection",
    components: {
        Buttons
    },
    data() {
        return {
            store,
            blog: store.nav2.blog
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
    }
}
</script>

<template>
    <div class="bg-img2">
        <div class="container w-75">
            <div class="ms_row-2">
                <div class="ms_col">
                    <h6>{{this.blog.sec}}</h6>
                    <h2 class="ms_section-title" v-html="highlightWord(this.blog.title, 0, '')">
                    </h2>
                    <p class="ms_white-text">
                        {{this.blog.parag}}
                    </p>
                </div>
                <div class="ms_col">
                    <form>
                        <div class="row ">
                            <div class="col">
                                <input type="text" class="form-control w-75" placeholder="Name" aria-label="Name">
                            </div>
                        </div>
                        <div class="row my-4">
                            <div class="col d-flex align-items-center">
                                <input type="email" class="form-control w-75" placeholder="Email" aria-label="Email">
                            </div>
                        </div> 
                        <Buttons :text="'subscribe'"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;
.bg-img2 {
    background-image: url(../assets/img/bg-1.jpg);
    z-index: -1;
    background-position: center;
    width: 100%;
}
</style>
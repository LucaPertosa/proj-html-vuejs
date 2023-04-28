<script>
import {store} from "../store";
export default {
    name: "Nav",
    props: {
        header: String,
        array: Array,
    },
    data() {
        return {
            store,
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
<ul :class="header === 'header' ? 'd-flex align-items-center justify-content-between' : 'd-flex justify-content-between align-items-center'">
    <li v-if="header === 'team'" class="green-select dark ms_circle" v-for="elem in array">
        <a :href="'https://'+ elem + '.com'" v-if="elem === 'facebook'"><i class="fa-brands fa-facebook"></i></a>
        <a :href="'https://'+ elem + '.com'" v-if="elem === 'twitter'"><i class="fa-brands fa-twitter"></i></a>
        <a :href="'https://'+ elem + '.com'" v-if="elem === 'linkedin'"><i class="fa-brands fa-linkedin"></i></a>
    </li>
    <li v-else :class="header === 'header' ? 'me-4 ms_upp' : 'black'" v-for="elem in array" :key="elem.id"> 
        <a href="" v-if="elem !== 'facebook' && elem !== 'twitter' && elem !== 'linkedin'">{{ elem }}</a>
        <a :href="'https://'+ elem + '.com'" v-if="elem === 'facebook'"><i class="fa-brands fa-facebook"></i></a>
        <a :href="'https://'+ elem + '.com'" v-if="elem === 'twitter'"><i class="fa-brands fa-twitter"></i></a>
        <a :href="'https://'+ elem + '.com'" v-if="elem === 'linkedin'"><i class="fa-brands fa-linkedin"></i></a>
    </li>
</ul>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

li {
    cursor: pointer;
    color: $text-color;
    &.black {
        color: $header-info-color;
    
    }
}
li:hover{
    color: $logo-color;
}
.ms_circle {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin: 0 5px;
}
.ms_upp {
    text-transform: uppercase;
}
</style>

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
}
</script>

<template>
<ul :class="header === 'header' ? 'd-flex align-items-center' : ''">
    <li :class="header === 'header' ? 'me-5 ms_upp' : 'ms-5 black'" v-for="elem in array" :key="elem.id"> 
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

.ms_upp {
    text-transform: uppercase;
}
</style>

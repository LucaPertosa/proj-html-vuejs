<script>
import Nav from '../components/Nav.vue';
import Buttons from '../components/Buttons.vue';
import Logo from '../components/Logo.vue';
import { store } from '../store';
export default {
    name: "AppHeader",
    components: {
        Logo,  
        Nav,
        Buttons
    },
    data() {
        return {
            store

        }
    },
    mounted() {
        window.addEventListener("scroll", function () {
            var header = this.document.getElementById("header");
            if (window.pageYOffset > 0) {
                header.style.backgroundColor = `#E2E8E8`;
            } else {
                header.style.backgroundColor = "transparent";
            }
        })
    }
}
</script>

<template>
    <div class="stick">
        <div class="black">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="f_size">
                        Open Hours: Mon - Sat - 9:00 - 18:00
                    </div>
                    <div class="contacts">
                        <Nav :array="this.store.contacts" :header="``"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="ms_back-img" id="header">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between pad">
                    <Logo/>
                    <div class="d-flex">
                        <Nav :header="`header`" :array="this.store.nav"/>
                        <Buttons :text="`get in touch`"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables" as *;
.black {
    background-color: $header-info;
    color: $header-info-color;
    padding-top: $pad1;
    padding-bottom: $pad1;
}
.pad {
    padding-top: $pad3;
    padding-bottom: $pad3;
}
.contacts {
    width: 40%;
}
.f_size {
    font-size: .8rem;
}
.ms_back-img {
    background-color: transparent;
}
.stick {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}
</style>
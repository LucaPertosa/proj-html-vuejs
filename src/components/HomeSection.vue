<script>
import Buttons from '../components/Buttons.vue';
import { store } from '../store';
export default {
    name: "HomeSection",
    components: {
        Buttons
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="bg-img">
        <div class="container">
            <div class="ms_row">
                <div class="ms_col">
                    <h6>FUSION & ACQUISITIONS</h6>
                    <h2 class="section-title">Insurance Consulting</h2>
                    <!-- impostata ma da finire form control css -->
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Name" aria-label="Name">
                            </div>
                            <div class="col">
                                <input type="email" class="form-control" placeholder="Email" aria-label="Email">
                            </div>
                        </div>
                        <div class="row my-4">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Phone" aria-label="Phone">
                            </div>
                            <div class="col">
                                <select id="inputState" class="form-select">
                                    <option selected>More Info</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div> 
                        <Buttons :text="'get in touch'"/>
                        <Buttons :color="'light'" :text="'read more'" class="mx-4"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables" as *;
.bg-img {
    background-image: url(../assets/img/bg-6.jpg);
    z-index: -1;
    height: 100vh;
    padding-top: $pad4 * 5;
    width: 100%;
}

.ms_row {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 100%;
    margin: $padYSec 0;
}
.ms_col {
    width: 50%;
    height: 100%;
}

h6 {
    color: $logo-color;
}
.section-title {
    font-weight: 800;
    font-size: 4rem;
}
.form-control {
    background-color: grey;
}
</style>
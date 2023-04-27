import { reactive } from "vue";

export const store = reactive({
    nav: ["home","about","services","process","team","blog"],
    contacts: ["+1 (305) 1234-5678", "hello@example.com", `facebook`, `twitter`, `linkedin`],
    nav2: {
            home: {
                    sec: "function & acquisitions",
                    title: "insurance consulting",
            },
            about: {
                    sec: "about the network",
                    title: "the company",
                    parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos vero laboriosam repudiandae expedita et inventore ea aperiam quis ut quia incidunt harum ab asperiores soluta, at velit, cupiditate earum!",
                    underparag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    box: {
                        tradition: {
                            icon: "fa-solid fa-award icons-clr",
                            parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.123",
                        },
                        security: {
                            icon: "fa-solid fa-lock icons-clr",
                            parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.333",
                        },
                        certificate: {
                            icon: "fa-solid fa-certificate icons-clr",
                            parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.44",
                        },
                        expertise: {
                            icon: "fa-solid fa-graduation-cap icons-clr",
                            parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.55",
                        }
                    }
            },
        }
});
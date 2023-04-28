import { reactive } from "vue";

export const store = reactive({
    nav: ["home","about","services","process","team","blog"],
    contacts: ["+1 (305) 1234-5678", "hello@example.com", `facebook`, `twitter`, `linkedin`],
    imgPath: "../assets/img",
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
            services: {
                sec: "our business areas",
                title: "excellence in services",
                parag: "We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire",
                box: {
                    "audit & assurance": {
                        icon: "fa-solid fa-network-wired icons-clr",
                        parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.123",
                    },
                    "financial advisory": {
                        icon: "fa-solid fa-briefcase icons-clr",
                        parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.333",
                    },
                    "analytics and m&a": {
                        icon: "fa-solid fa-chart-simple icons-clr",
                        parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.44",
                    },
                    "middle marketing": {
                        icon: "fa-solid fa-plane icons-clr",
                        parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.55",
                    },
                    "legal consulting": {
                        icon: "fa-solid fa-gavel icons-clr",
                        parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.55",
                    },
                    "regulatory risk": {
                        icon: "fa-solid fa-hard-drive icons-clr",
                        parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.55",
                    }
                }
            },
            process: {
                sec: "how it works in practice",
                title: "process management",
                parag: "We work with innovative methodologies to ensure that the entire reformatting reformatting process is done from start to finish as planned.",
                box: [
                    {
                        title: "collection of information",
                        parag: "Lorem, ipsum dolor sit amet consectetur.",
                    },
                    {
                        title: "strategic planning",
                        parag: "Lorem, ipsum dolor sit amet consectetur.",
                    },
                    {
                        title: "assignment of responsibilities",
                        parag: "Lorem, ipsum dolor sit amet consectetur.",
                    },
                    {
                        title: "formatting process",
                        parag: "Lorem, ipsum dolor sit amet consectetur.",
                    },
                    {
                        title: "continuity formalization",
                        parag: "Lorem, ipsum dolor sit amet consectetur.",
                    },
                ]
            },
            team: {
                sec: "we like what we do",
                title: "team of experts",
                parag: "Ethics and integrity are the bases on which our professionals build their careers. They are fundamentals that become daily attitude",
                box: {
                    "David Cooper": {
                        parag: "CTO & CO-FOUNDER",
                        contacts: ['facebook','twitter', 'linkedin'],
                        img: `/src/assets/img/team-1.jpg`,
                    },
                    "Oliver Jhones": {
                        parag: "CHIEF PROCUREMENT",
                        contacts: ['facebook','twitter', 'linkedin'],
                        img: `/src/assets/img/team-3.jpg`,
                    },
                    "Emma Lopez": {
                        parag: "CHIEF MARKETING",
                        contacts: ['facebook','twitter', 'linkedin'],
                        img: "/src/assets/img/team-2.jpg",
                    },
                    "T.Johnson": {
                        parag: "CEO & PRESIDENT",
                        contacts: ['facebook','twitter', 'linkedin'],
                        img: "/src/assets/img/team-4.jpg",
                    },
                },
                presidentSpeech: {
                    title: "president speech",
                    parag: "lorem lorem lorem loremlorem lorem lorem lorem",
                    parag: "lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem",
                    parag: "lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem",
                    cit: "T.Johnson"
                }
            },
            news: {
                sec: "our editorial content",
                title: "latest news",
                parag: "Every week we publish content about what is best in the business world.",
                box: {
                    "Increasing creativity is possible for everyone": {
                        img: "/src/assets/img/news-1.jpg",
                    },
                    "Because market research is part of business plan": {
                        img: "/src/assets/img/news-2.jpg",
                    },
                    "Working from home is a new trend": {
                        img: "/src/assets/img/news-3.jpg",
                    },
                    
                }
            },
            blog: {
                sec: "newsletter",
                title: "know first",
                parag: "Follow closely and receive content about our company and the news of the current market.",
            },
            footer: {
                home: ["A Functional HTML Template for Corporate & Business", "+1 (305) 1234-5678", "hello@example.com", "Main Avenue, 987" ],
                about: ["the company", "institutional", "social & events", "innovation", "environment", "technology"],
                services: ["audit & assurance", "financial advisory", "analytics and m&a", "middle marketing", "legal consulting", "regulatory risk"],
                support: ["responsibility", "terms of use", "about cookies", "privacy policy", "accessibility", "information"]
            }
        }
});
import { reactive } from "vue";

export const store = reactive({
    nav: ["home","about","services","process","team","blog"],
    contacts: ["+1 (305) 1234-5678", "hello@example.com", `facebook`, `twitter`, `linkedin`]
});
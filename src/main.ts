import { createApp } from "vue";
import Layout from "./shared/layout/layout.vue";
import "./assets/index.scss";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCheckSquare,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faXmarkSquare);

createApp(Layout)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#layout");

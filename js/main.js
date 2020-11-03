
import { myRouter } from './routes.js'
import bookHeader from "./cmp/book-header.cmp.js";
import bookFooter from "./cmp/book-footer.cmp.js";
import userMsg from "./cmp/user-msg.cmp.js"



const options = {
  el: "#app",
  router:myRouter,
  template: `
    <section class="flex column">
    <book-header />
    <main class="main-content grow">
    <user-msg></user-msg>
      <router-view ></router-view>
    </main>
    <book-footer />
    </section>
    `,
    components:{
      bookHeader,
      bookFooter,
      userMsg
    }
};

const app = new Vue(options);

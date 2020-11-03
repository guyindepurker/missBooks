import {eventBus} from '../service/event-bus-service.js'


export default {
    template: `
    
        <section v-if="msg" :class="['user-msg',msg.type]">
            <p>{{msg.txt}}</p>
            <div>
                <router-link v-if="link" @click="msg=null" :to="'/books/' +link">Check it Out</router-link>
            </div>
            <button :class="msg.type" @click="msg=null">x</button>
        </section>
    `,
    data() {
        return {
            msg: null,
        }
    },
    created() {
        eventBus.$on('show-msg', msg => {
            this.msg = msg
            if(msg.link) this.link = msg.link
            console.log(msg);
            setTimeout(()=>{
                this.msg = null;
            }, 2000)
        })
    }
}
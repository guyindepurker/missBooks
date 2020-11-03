import {eventBus} from '../service/event-bus-service.js'


export default {
    template: `
    
        <section v-if="msg" :class="['user-msg',msg.type]">
            <p>{{msg.txt}}</p>
            <div>
            <button :class="msg.type" @click="msg=null">x</button>
            </div>

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
            setTimeout(()=>{
                this.msg = null;
            }, 2000)
        })
    }
}
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Home, name: "Home"},
        {path: "/doc", component: Doc, name: "Doc", redirect: "/doc/switch", children: [
                {path: "switch", component: SwitchDemo, name: "SwitchDemo"},
                {path: "button", component: ButtonDemo, name: "ButtonDemo"},
            ]
        }
    ]
});

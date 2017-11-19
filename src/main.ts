import 'src/css/main';
import 'src/lib/init';

import Vue from 'vue';
import store from 'src/vuex';

import * as modal from 'src/mixins/params';
import delegate from 'src/plugin/delegate';

import ActionMenu from 'src/components/action-menu';
import SliderMenu from 'src/components/slider-menu';
import DrawingMain from 'src/components/drawing-main';

Vue.use(delegate);
Object.assign(Vue.prototype, modal);
Vue.config.productionTip = ($env.NODE_ENV === 'development');

// 移除 loading 界面
function loaded() {
    const loading = document.getElementById('start-loading') as HTMLElement;

    loading.style.opacity = '0';
    loading.style.transition = 'opacity .5s';
    setTimeout(() => loading.remove(), 500);
    console.log('Schematic Ready.');
}

// init vue
new Vue({
    store,
    el: '#app',
    name: 'Main',
    components: { ActionMenu, SliderMenu, DrawingMain },
    render: (h) => h(
        'main', { attrs: { id: 'app' }},
        [h('drawing-main'), h('slider-menu'), h('action-menu')],
    ),
    async mounted() {
        // 调试时加载，组件挂在全局变量上
        if ($env.NODE_ENV === 'development') {
            const Compo = await import(/* webpackChunkName: "debugger" */ 'src/lib/debugger');
            const area = document.querySelector('.drawing-main svg g') as HTMLElement;

            (window as Window & { $debugger: any }).$debugger = new Compo.default();
            area.appendChild($debugger.$el);
        }

        // 初始化完成
        loaded();
    },
});

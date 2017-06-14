import Vue from 'vue';

/**
 * 创建 div 元素并添加到 DOM 上
 * @return {Obect} DOM
 */
const createElm = function() {
    const elm = document.createElement('div');

    document.body.appendChild(elm);
    return elm;
};

/**
 * 回收 vm
 * @param {Object} vm
 */
exports.destroyVM = function(vm) {
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el);
};

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String} Compo    - 组件配置，可直接传 template
 * @param  {Boolean} {mounted=true} - 是否添加到 DOM 上
 * @return {Object} vm
 */
exports.createVue = function(Compo, mounted = true) {
    if (Object.prototype.toString.call(Compo) === '[object String]') {
        Compo = { template: Compo };
    }
    return new Vue(Compo).$mount(mounted ? createElm() : null);
};

/**
 * 创建一个测试组件实例
 * @link https://cn.vuejs.org/v2/guide/unit-testing.html#编写可被测试的组件
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean} {mounted=true} - 是否添加到 DOM 上
 * @return {Object}  vm
 */
exports.createTest = function(Compo, propsData = {}, mounted = true) {
    if (propsData === true || propsData === false) {
        mounted = propsData;
        propsData = {};
    }
    const elm = createElm();
    const Ctor = Vue.extend(Compo);
    return new Ctor({ propsData }).$mount(mounted ? elm : null);
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param {Element} elm
 * @param {String} name
 * @param {Object} {opts={}}
 */
exports.triggerEvent = function(elm, name, opts = {}) {
    let evt;
    // 默认全部模拟事件允许取消，允许冒泡
    opts = Object.assign(opts, {
        bubbles: true,
        cancelable: true
    });
    if (/^mouse|click/.test(name)) {
        evt = new MouseEvent(name, opts);
    } else if (/^key/.test(name)) {
        evt = new KeyboardEvent(name, opts);
    } else {
        evt = new Event(name, opts);
    }

    elm.dispatchEvent
        ? elm.dispatchEvent(evt)
        : elm.fireEvent('on' + name, evt);

    return elm;
};

/**
 * 触发 “mouseup” 和 “mousedown” 事件
 * @param {Element} elm
 * @param {Object} {opts={}}
 */
exports.triggerClick = function(elm, opts = {}) {
    exports.triggerEvent(elm, 'mousedown', opts);
    exports.triggerEvent(elm, 'mouseup', opts);

    return elm;
};

/**
 * 等待固定时间的异步函数
 * @param  {Number} {time=10}
 * @return {Promise} awit
 */
exports.delay = function(time = 10) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

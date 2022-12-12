import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
Vue.use(Vuex);
const moduleB = {
  state: {
    count: 10
  },
  mutations: { // 必须同步
    increment(state) {
      state.count = 20;
    }
  },
}
const moduleA = {
  state: {
    count: 0
  },
  mutations: { // 必须同步
    increment(state, payLoad) { // 两个模块有同名函数都触发
      console.log(payLoad)
      state.count++;
    }
  },
  getters: { // 计算属性
    doneTodos: state => {
      state.count++
      console.log('111' + state.count)
      return state.count;
    }
  },
  actions: { // 支持异步
    increment ({ commit }) {
      commit('increment',{age: 20})
    }
  }
}
const store = new Vuex.Store({
  modules: {
    b:moduleB,
    a:moduleA
  }
})
// store.commit('increment', {age: 18});
// console.log(store.getters.doneTodos);
store.commit('increment', {agr: 20})
console.log(store.state.b.count)
// console.log(store.state.a.count)
// Vue.config.productionTip = false
// Vue.prototype.$eventBus = new Vue()
new Vue({
  render: h => h(App),
}).$mount('#app')

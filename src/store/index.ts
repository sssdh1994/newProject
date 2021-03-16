import {createStore} from 'vuex'

export default createStore({
  state:{
    vuexNum :10,
  },
  mutations:{
    setVuexNum(state,value){
      state.vuexNum = value
    },
    addVuexNum(state){
      state.vuexNum =  state.vuexNum + 10
    }
  },
  actions:{
    SETVUEXNUM(ctx,value){
      ctx.commit('setVuexNum',value)
    }
  }
})
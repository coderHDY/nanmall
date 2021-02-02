import { ADD_CART, ADD_COUNT, SELECT_ALL, SELECT_CHANGE,DESELECT_ALL } from "./mutation-types";

export default {
  [ADD_CART](state, payload) {
    state.cartList.push(payload)
  },
  [ADD_COUNT](state, payload) {
    const product = state.cartList.find(item => item.iid == payload.iid)
    product.number++
  },
  [SELECT_CHANGE](state, payload) {
    const item = state.cartList.find(item => item.iid === payload)
    item.isChecked = !item.isChecked
  },
  [SELECT_ALL](state) {
    state.cartList.map(item => {
      item.isChecked = true
    })
  },
  [DESELECT_ALL](state) {
    state.cartList.map(item => {
      item.isChecked = false
    })
  }
}

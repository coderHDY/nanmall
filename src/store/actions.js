import { ADD_CART, ADD_COUNT } from "./mutation-types";

export default {
  addCart(context, payload) {
    const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      context.commit(ADD_COUNT, payload)
    } else {
      context.commit(ADD_CART, payload)
    }
  }
}

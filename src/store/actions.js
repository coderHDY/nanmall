import { ADD_CART, ADD_COUNT } from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit(ADD_COUNT, payload)
        resolve("商品数量+1")
      } else {
        context.commit(ADD_CART, payload)
        resolve("添加购物车成功")
      }
    })
  }
}

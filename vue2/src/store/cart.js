/*
 * @Author: your name
 * @Date: 2020-03-22 08:31:09
 * @LastEditTime: 2020-04-07 14:11:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vueLearn/vue2/src/store/cart.js
 */
export default {
  state: {
    // 购物车初始状态
    cart: JSON.parse(localStorage.getItem("cart")) || []
  },
  mutations: {
    addcart(state, item) {
      // 添加商品至购物车
      const good = state.cart.find(v => v.title == item.title);
      // console.log('addcart', state.cart, 'item', item)
      if (good) {
        good.cartCount += 1;
      } else {
        state.cart.push({
          ...item,
          cartCount: 1
        });
      }
    },
    cartremove(state, index) {
      // count-1
      if (state.cart[index].cartCount > 1) {
        state.cart[index].cartCount -= 1;
      }
    },
    cartadd(state, index) {
      // count+1
      state.cart[index].cartCount += 1;
    }
  },
  getters: {
    cartTotal: state => {
      // 商品总数
      let num = 0;
      state.cart.forEach(v => {
        num += v.cartCount;
      });
      return num;
    },
    total: state => {
      return state.cart.reduce(
        (total, item) => total + item.cartCount * item.price,
        0
      );
    }
  },
  actions: {

  }
}
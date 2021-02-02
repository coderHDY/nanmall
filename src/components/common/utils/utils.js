export function debounce(func, delay) { //定义防抖函数
  let timer = null;     //等待时间
  return function (...args) {
    if (timer) clearTimeout(timer); //每次来请求都重置等待时间
    timer = setTimeout(() => { //重置函数和等待时间
      func.apply(this, args);
    }, delay)
  }
}

//格式化时间
export function formatDate(date, fmt) {
  date = new Date(date * 1000)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDay(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ""
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str: padLeftZero(str));
    }
  }
  return fmt
};

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export const mixin = {
  data() {
    return {
      isShowBack: false
    }
  },
  methods: {
    //监听滚动事件
    scroll(position) {
      this.isShowBack = position["y"] <= -1000;
      if (this.showTabOffsetTop !== undefined) {
        this.showTabOffsetTop = position["y"] <= -this.tabOffsetTop;
      }
    },
    backTop() {
      this.$refs.scroll.backTop()
    },
  }
}

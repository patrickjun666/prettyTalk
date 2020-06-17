/** 
 * 存放一些工具类
*/
//  防抖函数封装
export default function debounce(func, delay) {
  let timer = null

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      console.log(this);
      func.apply(this, args)
    }, delay);
  }
}
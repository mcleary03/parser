export default {
  install(Vue, options) {
    Vue.prototype.stringIt = function(obj) {
      return `${obj.x} ${obj.y} ${obj.z}`
    }
  }
}

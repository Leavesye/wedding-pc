import Vue from 'vue'
var comsys = {
  install(Vue) {
    Vue.prototype.date = function(data) {
      date = new Date(data)
      year = date.getFullYear()
      month = date.getMonth() + 1
      month = month < 10 ? '0' + month : month
      day = date.getDate()
      day = day < 10 ? '0' + day : day
      hours = date.getHours()
      hours = hours < 10 ? '0' + hours : hours
      minutes = date.getMinutes()
      minutes = minutes < 10 ? '0' + minutes : minutes

      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
    }
  }
}
Vue.use(comsys)

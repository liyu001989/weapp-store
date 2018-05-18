import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Weapp-Store',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/images/home.png',
        selectedIconPath: 'static/images/home_selected.png'
      }, {
        pagePath: 'pages/users/show',
        text: '我的',
        iconPath: 'static/images/user.png',
        selectedIconPath: 'static/images/user_selected.png'
      }],
      color: '#bfbfbf',
      selectedColor: '#2c2c2c'
    }
  }
}

import wx from 'wx'
import Fly from 'flyio'

const request = new Fly()

request.interceptors.request.use((request, promise) => {
  wx.showNavigationBarLoading()
  // 给所有请求添加自定义 Authorization header
  request.headers['Authorization'] = 'Bearer foobar'
  return request
})

// fly.config.baseURL = process.env.BASE_URL
request.config.baseURL = 'http://shop.test/api'

request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()

    // let errorMesg = ''
    // // 可以在这里对收到的响应数据对象进行加工处理
    // switch (err.response.statusCode) {
    //   case 401:
    //     console.log('未登陆,拦截重定向登陆界面')
    //     await this.redirectTo({
    //       url: 'login'
    //     })
    //     break
    //   case 403:
    //     console.log('未授权接口,拦截')
    //     errorMesg = 未授权接口
    //   case 500:
    //   case 502:
    //     errorMesg = (resp.data.error && (resp.data.error.details || resp.data.error.message)) || '服务器出错'
    //     break
    //   case 503:
    //     errorMesg = '哦～服务器宕机了'
    //     break
    // }
    wx.showToast({
      title: err.response.data.message,
      icon: 'none',
      duration: 3000
    })
    return promise.resolve()
  }
)

export default request

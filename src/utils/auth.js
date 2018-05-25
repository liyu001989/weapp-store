import wx from 'wx'
// import request from '@/utils/request'
import authService from '@/services/authorization'

const auth = {
  checkLogin: () => wx.getStorageSync('access_token') !== '',
  login: async () => {
    // 如果已登录则返回
    if (this.checkLogin) {
      return
    }

    // 调用微信接口获取临时登录凭证 （code）
    let loginData = await wx.login()

    // 调用登录服务
    let authResponse = await authService.store(loginData.code)

    // 保存 access_token
    wx.setStorageSync('access_token', authResponse.access_token)
    wx.setStorageSync('access_token_expired_at', new Date().getTime() + authResponse.expires_in * 1000)

    return authResponse
  }
}

export default auth

import request from '@/utils/request'

export default {
  // 创建 token
  store: (code) => request.post('weapp/authorizations', {code}),
  // 刷新 token
  update: () => request.put('authorizations/current'),
  // 删除 token
  destroy: () => request.delete('authorizations/current')
}

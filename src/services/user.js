import request from '@/utils/request'

export default {
  // 当前用户信息
  currentUser: () => request.get('user'),
}

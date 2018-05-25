<template>
<div class="container">

  <div v-if="userInfo">
    <div class="user-wrap">
      <!-- 用户头像 -->
      <open-data class="avatar" type="userAvatarUrl" ></open-data>
      <!-- 用户昵称 -->
      <open-data class="nick-name" type="userNickName"></open-data>
    </div>
    <div class="zan-panel">
      <a class="zan-cell zan-cell--access">
        <div class="zan-icon zan-icon-records"></div>
        <div class="zan-cell__bd">全部订单</div>
        <div class="zan-cell__ft"></div>
      </a>
      <a class="zan-cell zan-cell--access">
        <div class="zan-icon zan-icon-pending-payment"></div>
        <div class="zan-cell__bd">待支付</div>
        <div class="zan-cell__ft"></div>
      </a>
      <a class="zan-cell zan-cell--access">
        <div class="zan-icon zan-icon-logistics"></div>
        <div class="zan-cell__bd">待收货</div>
        <div class="zan-cell__ft"></div>
      </a>
    </div>
  </div>
  <div class="zan-panel">
    <a class="zan-cell zan-cell--access">
      <div class="zan-icon zan-icon-contact"></div>
      <div class="zan-cell__bd">关于我们</div>
      <div class="zan-cell__ft"></div>
    </a>
  </div>
</div>
</template>

<script>

import auth from '@/utils/auth'
import userService from '@/services/user'

export default {
  data () {
    user: {}
  },
  async mounted () {
    if (!auth.checkLogin()) {
      await auth.login()

    }

  }
}
</script>

<style scoped>
  .user-wrap {
    height: 150px;
  }
  .nick-name {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  .avatar {
    overflow: hidden;
    display: block;
    width: 80px;
    height: 80px;
    display: block;
    padding: 4px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin: 40px auto 10px;
  }
  .zan-icon {
    margin-right: 5px;
  }
</style>

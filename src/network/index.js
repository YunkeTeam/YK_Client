import request from "./request";
// 封装axios请求函数，并用export导出
// 登录请求
export function doLogin(datas, redisKey) {
  return request({
    url: "/user/login",
    method: "post",
    data: datas,
    headers: {
      'Redis-Key': redisKey
    }
  })
}

// 获取验证码
export function getCaptcha() {
  return request({
    url: "/user/verifyCode",
    method: 'get',
    responseType: 'blob' // 这里特殊注明返回格式是文件流
  })
}

// 发送注册请求
export function doRegister(datas, redisKey) {
  return request({
    url: "/user/signUp",
    method: 'post',
    data: datas,
    headers: {
      'Redis-Key': redisKey
    }
  })
}

// 获取用户所有信息
export function getAllUserInfo() {
  return request({
    url: "/user/getUserInfo",
    method: "post",
  })
}

// 更新用户信息
export function doModifyUserInfo(datas) {
  return request({
    url: "/user/modifyInfo",
    method: "post",
    data: datas
  })
}

// 用户更新密码
export function doUpdatePassword(datas) {
  return request({
    url: "/user/fix/password",
    method: "post",
    data: datas
  })
}

// 发送忘记密码请求
export function doForgetPassword(datas) {
  return request({
    url: "/user/resetPassword",
    method: "post",
    data: datas
  })
}
// 重置密码
export function doResetPassword(datas) {
  return request({
    url: "/user/verifyResetPassword",
    method: "post",
    data: datas
  })
}

// 分页查询帖子信息
export function getPostByPage(datas) {
  return request({
    url: "/post/list",
    method: 'get',
    params: datas
  })
}

// 点赞帖子请求
export function doLikePost(datas) {
  return request({
    url: '/post/like',
    method: 'post',
    data: datas
  })
}

// 查询活跃达人
export function getActivePerson(datas) {
  return request({
    url: '/post/talent',
    method: 'get',
    params: datas
  })
}

// 发表评论
export function doReleaseComment(datas) {
  return request({
    url: "/comment/add",
    method: 'post',
    data: datas
  })
}

// 获取全部个人的帖子
export function getPersonalPostByNum() {
  return request({
    url: "/post/listme",
    method: 'get',
  })
}

// 批量删除用户帖子信息
export function doDeleteMultiPosts(datas) {
  return request({
    url: "/post/delete",
    method: "post",
    data: datas
  })
}

// 发布帖子
export function doReleasePost(datas) {
  return request({
    url: '/post/add',
    method: 'post',
    data: datas
  })
}

// 获取好友列表
export function getAllContactPerson() {
  return request({
    url: '/conversation/getSimpleInformation',
    method: 'post',
  })
}

// 请求与对应好友的所有聊天信息
export function getAllChatMessage(datas) {
  return request({
    url: '/conversation/getAllMessage',
    method: 'post',
    params: datas
  })
}

// 将消息设置为未读消息
export function doUpdateMessageStatus(datas) {
  return request({
    url: '/conversation/setComplete',
    method: 'post',
    params: datas
  })
}

// 添加好友
export function doAddFriend(datas) {
  return request({
    url: "/conversation/addFriend",
    method: 'post',
    params: datas
  })
}
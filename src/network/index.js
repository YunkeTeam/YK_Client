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
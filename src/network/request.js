import axios from 'axios'

// 全局默认配置
let baseURL
// 判断开发环境(一般用于本地代理)
if (process.env.NODE_ENV === 'development') { // 开发环境
  baseURL = '/api' // 你设置的本地代理请求(跨域代理)
} else { // 编译环境
  if (process.env.type === 'test') { // 测试环境
    baseURL = 'http://localhost:8082'
  } else { // 正式环境
    baseURL = 'http://localhost:8081'
  }
}

// 请求配置文件，axios的配置都在这里进行
export default function request(config) {
   // 1.创建axios的实例
   const instance = axios.create({
     baseURL: baseURL, // 后台服务地址
     timeout: 5000,
     responseType: "json",
   })
  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    return Promise.reject(error)
  });
  instance.interceptors.response.use((res) => {
    // 请求响应后拦截
    if (res.status === 200) {
      return Promise.resolve(res)
    }
    return res;
  }, (error) => {
    return Promise.reject(error)
  })
  // 3.发送真正的网络请求
   return instance(config);
}
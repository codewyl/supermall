import axios from "axios";

//方式一
// export function request(config,success,fail){
//   //1.创建axios的实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000,
//   })
//   //发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       fail(err)
//     })
// }

//方式二
// export function request(config){
//   //1.创建axios的实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000,
//   })
//   //发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }

//方式三
// export function request(config){
//   return new Promise((resolve,reject) => {
//     //1.创建axios的实例
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000,
//     })
//     //发送真正的网络请求
//     instance(config)
//       .then(res => {
//         // console.log(res);
//         resolve(res)
//       })
//       .catch(err => {
//         // console.log(err);
//         reject(err)
//       })
//   })
//
// }


//axios拦截器的使用

export function request(config){
  //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000,
  })

  // 下面这个是全局拦截
// axios.interceptors


  //拦截请求
  instance.interceptors.request.use(aaa => {
    // console.log(aaa);
    return aaa
    //拦截请求实用场景
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
  },err => {
    // console.log(err);
  })


  //拦截响应
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  },err => {
    console.log(err);
  })


  //发送真正的网络请求
  return  instance(config)

}

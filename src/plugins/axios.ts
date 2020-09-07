import axios from "axios";
import qs from "qs";

axios.defaults.baseURL = "";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
// axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers["Cache-Control"] = "no-cache";
// axios.defaults.headers["pragma"] = "no-cache";

// const source = axios.CancelToken.source();

//token
// axios.interceptors.request.use(request => {
//   request.headers["demo-auth"] = store.state.loginInfo
//     ? store.state.loginInfo.userId
//     : ""; // 已将userId保存在store中
//   return request;
// });

axios.interceptors.request.use(request => {
  if (request.method === "post") {
    request.data = qs.stringify(request.data);
  }
  if (request.method === "put") {
    request.data = qs.stringify(request.data);
  }
  return request;
});

// axios.interceptors.response.use(response => {
//   const data = response.data;
//   if ([10002].includes(data.ret)) {
//     router.then(lib => lib.default.push({ name: "login" }));
//     Message.warning(data.msg);
//   }
//   return response;
// });

//返回值解构
axios.interceptors.response.use(
  response => {
    const data = response.data;
    const isJson = (response.headers["content-type"] || "").includes("json");
    if (isJson) {
      if (data.code === "200") {
        return Promise.resolve({
          data: data.details,
          code: data.code
        });
      }
      return Promise.reject(data.msg || "error");
    } else {
      return data;
    }
  },
  err => {
    // const isCancel = axios.isCancel(err);
    // if (isCancel) {
    //   return new Promise(() => {});
    // }
    return Promise.reject(err);
  }
);

// export function post(url, data, otherConfig) {
//   return axios.post(url, data, otherConfig);
// }

// export function get(url, data, otherConfig) {
//   return axios.get(url, { params: data, ...otherConfig });
// }
export default axios;

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
  },
});

// request token 저장 방식 수정 할 것
// cache storage 사용
instance.interceptors.request.use(
  function (config) {
    if (!!localStorage.getItem("accessToken")) {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      config.headers.accessToken = `Bearer ${accessToken ? accessToken : ""}`;
      config.headers.refreshToken = `Bearer ${refreshToken ? refreshToken : ""}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("request error", error);
    return Promise.reject(error);
  }
);

// response access/refresh token 변경 적용
// instance.interceptors.response.use(
//   function (response) {
//     // console.log("인터넵트 응답 받았어요!");
//     // 정상 응답
//     return response;
//   },

//   function (error) {
//     console.log("인터셉트 응답 못받았어요...ㅠㅠ");
//     return Promise.reject(error);
//   }
// );

export const AuthAPI = {
  postNickCheck: (payload) => instance.post("/api/user/nickCheck", payload),
  // postLogIn: (payload) => instance.post("/api/login", payload),
};

export default instance;

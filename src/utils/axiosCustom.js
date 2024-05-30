import axios from "axios";
import NProgress from "nprogress";
import {store} from "../redux/store"

NProgress.configure({showSpinner: false,speed: 600,easing: 'ease', trickleSpeed: 100})
const instance = axios.create({
  baseURL: "http://localhost:8080/",
});
instance.interceptors.request.use(
  function (config) {
    console.log(store.getState())
    const access_token = store?.getState()?.user?.account?.access_token;
    config.headers["Authorization"] = "Bearer " + access_token;

    NProgress.start();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response && response.data ? response.data : response;
  },
  function (error) {
    NProgress.done();
    if(error.response.data && error.response.data.EC === -999) {
      window.location.href = "/login"
    }
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);

export default instance;

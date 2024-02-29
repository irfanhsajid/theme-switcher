import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const baseUrlWs = import.meta.env.VITE_BASE_URL_SOCKET;
const currencyUrl = import.meta.env.VITE_CURRENCY_URL;
const wsOptions = {
  shouldReconnect: () => true
}
const statusCode = (res) => {
  return res?.response?.status || res?.status;
}
const instance = (endPoint) => {
  return axios.create({
    baseURL: baseUrl + endPoint,
    // timeout: 5000, //default 2500
  });
}
const Account = instance('/account');
const Auth = instance('/auth');
const Communication = instance('/communication');
const Notification = instance('/notification');
const Service = instance('/service');
const Support = instance('/support');
export {
  baseUrlWs,
  statusCode,
  Account,
  Auth,
  Communication,
  Notification,
  Service,
  Support,
  currencyUrl,
  wsOptions,
};
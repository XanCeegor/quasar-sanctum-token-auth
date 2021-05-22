import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

//Laravel Sanctum setup
axios.defaults.withCredentials = true;
axios.get("http://127.0.0.1/sanctum/csrf-cookie");
axios.defaults.baseURL = "http://127.0.0.1/api/";

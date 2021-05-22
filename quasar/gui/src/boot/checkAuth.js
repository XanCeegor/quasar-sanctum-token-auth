import axios from "axios";

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files

//run before main Vue root component is mounted
//check if we have any persisted login details and apply them
export default async ({ store }) => {
  const userInfo = localStorage.getItem("user");
  if (userInfo) {
    const userData = JSON.parse(userInfo);
    store.dispatch("AuthModule/setUser", userData);
  }

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        store.dispatch("AuthModule/logout");
      }
      return Promise.reject(error);
    }
  );
};

<template>
  <q-page class="flex row justify-center items-center">
    <q-btn class="q-mx-sm" color="primary" label="Login" @click="loginUser" />
    <q-btn
      class="q-mx-sm"
      color="secondary"
      label="Get User"
      @click="getUser"
    />
    <q-btn class="q-mx-sm" color="red" label="Logout" @click="logoutUser" />
  </q-page>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "PageIndex",
  data: () => ({
    credentials: {
      email: "user@email.com",
      password: "password"
    },
    token: null
  }),
  methods: {
    ...mapActions({
      login: "AuthModule/login",
      logout: "AuthModule/logout"
    }),
    loginUser() {
      this.login(this.credentials)
        .then(() => {
          //successfully logged in, do whatever here
          console.log("logged in");

          // this.$router.push({ name: "dashboard" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    logoutUser() {
      this.logout()
        .then(() => {
          //successfully logged out, do whatever here
          console.log("logged out");

          // this.$router.push({ name: "login" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUser() {
      axios.get("user").then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>

import axios from "axios";
import state from "./state";

/**
 * Set the user object to store and localStorage
 * @param {*} state
 * @param {object} userData
 */
export function setUser(state, userData) {
  state.user = userData;
  localStorage.setItem("user", JSON.stringify(userData));
  axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
}

/**
 * Remove the user object from store and localStorage
 */
export function clearUser(state) {
  state.user = null;
  localStorage.removeItem("user");
  // location.reload();
}

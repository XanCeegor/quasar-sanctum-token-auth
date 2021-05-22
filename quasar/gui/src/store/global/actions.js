import axios from "axios";

/**
 * Attempts to log the user in with credentials provided.
 * @param {*} state
 * @param {object} credentials
 */
export async function login({ dispatch }, credentials) {
  const { data } = await axios.post("/login", credentials);
  dispatch("setUser", data);
}

/**
 * Logs the user out
 * @param {*} state
 */
export async function logout({ state, commit }) {
  const response = await axios.post("logout", state.user.token);
  if (response.status == 200) {
    commit("clearUser");
  }
}

/**
 * Sets the user object
 * @param {*} state
 * @param {object} userData
 */
export function setUser({ commit }, userData) {
  commit("setUser", userData);
}

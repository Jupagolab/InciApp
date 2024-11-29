import axios from "./axios.js";

export const loginRequest = usuario => {
  axios.post("/login", usuario);
};

export const verifyRequest = () => {};

export const signupRequest = () => {};

export const updateRequest = () => {};

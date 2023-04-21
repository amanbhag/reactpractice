import client from "./axios";

export const createUser = async (userDetails) => {
  try {
    const { data } = await client.post("/user/register", userDetails);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};
export const login = async (userDetails) => {
  try {
    const { data } = await client.post("/user/login", userDetails);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};
export const changePassword = async (userDetails) => {
  try {
    const { data } = await client.post("/user/password", userDetails);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};
export const deleteuser = async (userDetails) => {
  try {
    const { data } = await client.post("/user/deleteuser", userDetails);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};

import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
  const url = "https://api.escuelajs.co/api/v1/auth/login";

  try {
    const { data } = await axios.post(url, {
      email,
      password,
    });

    // ✅ SAVE TOKEN TO LOCAL STORAGE
    localStorage.setItem("accessToken", data.access_token);

    // ✅ UPDATE CONTEXT STATE
    dispatch({
      type: "LOGIN",
      payload: {
        user: {
          email,
          token: data.access_token,
        },
      },
    });

    return data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};

import axios from "axios";

export const userSignup = async (name, email, password) => {
  const url = "https://api.escuelajs.co/api/v1/users/";

  try {
    const { data } = await axios.post(url, {
      name,
      email,
      password,
      avatar: "https://i.pravatar.cc/300",
    });

    return data;
  } catch (error) {
    throw error.response?.data || "Signup failed";
  }
};

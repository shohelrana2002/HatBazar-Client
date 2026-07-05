import axios from "axios";

const saveUser = async (user) => {
  try {
    const userInfo = {
      name: user?.displayName || "",
      email: user?.email || "",
      phone: user?.phoneNumber || "",
      photoURL: user?.photoURL || "",
    };

    const { data } = await axios.post(
      "http://localhost:3000/api/users/save",
      userInfo,
      {
        withCredentials: true,
      },
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default saveUser;

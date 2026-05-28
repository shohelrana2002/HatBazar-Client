import axiosPublic from "../api/axiosPublic";

const useAxiosPublic = () => {
  // GET request
  const get = async (url) => {
    const res = await axiosPublic.get(url);
    return res.data;
  };

  return { get };
};

export default useAxiosPublic;

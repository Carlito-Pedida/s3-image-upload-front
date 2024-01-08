import { useState } from "react";
import axiosClient from "../config/axios";
import { Center, useToast } from "@chakra-ui/react";

const useMutation = ({ url, method = "POST" }) => {
  const toast = useToast();
  const [state, setState] = useState({
    isLoading: false,
    error: ""
  });
  // console.log(state);

  const fn = async (data) => {
    setState((prev) => ({
      ...prev,
      isLoading: true
    }));

    axiosClient({ url, method, data })
      .then(() => {
        setState({ isLoading: false, error: "" });
        toast({
          title: "Successfully Added Image",
          status: "success",
          duration: 3000,
          position: "top"
        });
      })
      .catch((error) => {
        setState({ isLoading: false, error: error.message });
      });
  };

  return { mutate: fn, ...state };
};

export default useMutation;

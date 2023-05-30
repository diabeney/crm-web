import React from "react";
import useAxiosAuth from "./useAxiosAuth";
import { UseMutateFunction, useMutation } from "react-query";
import { TNewUserFields } from "../types/type";

export type Status = "onsubmit" | "success" | "error" | "progress";

function usePostNewSignUp() {
  const [status, setStatus] = React.useState<Status>("progress");
  const [errMessage, setErrMessage] = React.useState("");
  const axiosAuth = useAxiosAuth();

  const { mutate: createNewUser, error }: any = useMutation(async (data) => {
    setStatus("onsubmit");
    try {
      const res = await axiosAuth.post("/api/v1/users/register", data);
      setStatus("success");
      return res.data;
    } catch (err: any) {
      setStatus("error");
      setErrMessage(err.response.data.detail);
    }
  });

  return { createNewUser, status, error, errMessage };
}

export default usePostNewSignUp;
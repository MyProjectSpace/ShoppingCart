import {
  fetchBaseQuery,
  type BaseQueryApi,
  type FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { startLoading, stopLoading } from "../layout/uiSlice";
//import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:5001/api/",
});

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  api.dispatch(startLoading());
  await sleep();
  const restult = await customBaseQuery(args, api, extraOptions);
  api.dispatch(stopLoading());
  if (restult.error) {
    const { status, data } = restult.error;
    console.log({ status, data });
  }
  return restult;
};

import useSWR, { Key } from "swr";
import { poster, fetcher, baseURL } from "../api";

type RequestType = "get" | "post";

const UseRequest = (
  url: Key,
  type: RequestType = "get",
  body?: RequestInit
) => {
  console.log(url);
  if (type === "get") return useSWR(`${baseURL}${url}`, fetcher);
  return useSWR([url, body], poster);
};

export default UseRequest;

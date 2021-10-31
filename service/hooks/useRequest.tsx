import useSWR, { Key } from "swr";
import { poster, fetcher } from "../api";

type RequestType = "get" | "post";

const UseRequest = (
  url: Key,
  type: RequestType = "get",
  body: RequestInit
) => {
  if (type === "get") return useSWR(url, fetcher);
  return useSWR([url, body], poster);
};

export default UseRequest

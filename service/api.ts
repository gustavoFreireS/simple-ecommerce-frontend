import { Key } from "swr";

const baseURL: string = process.env.NEXT_PUBLIC_API_HOST;

const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) =>
  fetch(input, init, ...args).then((res) => res.json());

const poster = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(`${baseURL}input`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(init.body),
  });
  return await res.json();
};

export { fetcher, poster, baseURL };

export async function getStaticProps() {}

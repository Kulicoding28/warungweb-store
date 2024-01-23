import { Domain } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/domains`;

const getDomains = async (): Promise<Domain[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getDomains;

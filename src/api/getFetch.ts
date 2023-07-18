import axios, { AxiosResponse } from "axios";

type IGetFetch = <T>(
  baseURL: string,
  params?: Record<string, string | number>,
) => Promise<T>;

export const getFetch: IGetFetch = async (baseURL, params = {}) => {
  try {
    const response: AxiosResponse = await axios({
      baseURL,
      method: "GET",
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Fetch request failed:", error);
    throw error;
  }
};

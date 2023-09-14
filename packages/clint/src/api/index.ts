import { instance } from "./instance";

export type LoginDTO = {
  name: string;
  password: string;
  captcha: string;
};

export const login = async (data: LoginDTO) => {
  return await instance.post("login", data);
};

import { HttpClient } from "../../infra/HttpClient/httpClient";
import { tokenService } from "./tokenService";

export const authService = {
  async login({ username, password }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: { username, password }
    })
    .then(async res => {
      if (!res.ok) throw new Error("Usuário ou senha inválidos");
      const body = await res.body;
      
      tokenService.save(body.data.access_token);
    });
  }
}

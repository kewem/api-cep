import axios from "axios";
import { Cep } from "../../../entities/Cep";
import { ICepProvider } from "../ICepProvider";

export class CepProvider implements ICepProvider {
  async findCep(cep: string): Promise<Cep> {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (result.data.erro) {
      return Promise.reject("Invalid CEP.");
    }

    return new Cep(result.data);
  }

  sanitizeCep(cep: string): string {
    return cep.replace(/\.|\-/g, "");
  }

  validateCep(cep: string): boolean {
    return /\d{5}\-\d{3}/.test(cep);
  }
}

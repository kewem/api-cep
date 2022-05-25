import axios from "axios";
import { Cep } from "../../entities/Cep";
import { ICepProvider } from "../ICepProvider";

export class CepProvider implements ICepProvider {
  async findCep(cep: string): Promise<Cep> {
    if (!this.validateCep(cep)) {
      return Promise.reject("Invalid CEP. expected something like: xx.xxx-xxx");
    }

    const sanitizedCep = this.sanitizeCep(cep);

    const result = await axios
      .get(`https://viacep.com.br/ws/${sanitizedCep}/json/`)
      
      if (result.data.erro) {
        return Promise.reject("Invalid CEP.");
      }

    return new Cep(result.data);
  }

  sanitizeCep(cep: string): string {
    return cep.replace(/\.|\-/g, "");
  }

  validateCep(cep: string): Boolean {
    return /\d{2}\.\d{3}\-\d{3}/.test(cep);
  }
}

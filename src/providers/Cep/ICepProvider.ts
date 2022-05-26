import { Cep } from "../../entities/Cep";

export interface ICepProvider {
  findCep(cep: string): Promise<Cep>;
  sanitizeCep(cep: string): string;
  validateCep(cep: string): boolean;
}

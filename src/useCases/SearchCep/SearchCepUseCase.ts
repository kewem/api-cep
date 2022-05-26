import { ICacheProvider } from "../../providers/Cache/ICacheProvider";
import { ICepProvider } from "../../providers/Cep/ICepProvider";
import { ISearchCepDTO } from "./SearchCepDTO";

export class SearchCepUseCase {
  constructor(private cepProvider: ICepProvider, private cacheProvider: ICacheProvider) {}

  async execute(data: ISearchCepDTO) {
    if (!this.cepProvider.validateCep(data.cep)) {
      return Promise.reject("Invalid CEP. expected something like: xxxxx-xxx");
    }

    const sanitizedCep = this.cepProvider.sanitizeCep(data.cep);

    if (this.cacheProvider.hasItemOnCache(sanitizedCep)) {
      const cep = this.cacheProvider.getItemOfCache(sanitizedCep);
      return Promise.resolve({ ...cep, fromCache: true });
    }

    const cep = await this.cepProvider.findCep(sanitizedCep).catch((error) => {
      return Promise.reject(error);
    });

    this.cacheProvider.setItemOnCache(sanitizedCep, cep);

    return Promise.resolve({ ...cep, fromCache: false });
  }
}

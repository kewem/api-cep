import { ICepProvider } from "../../providers/CepProvider/ICepProvider";
import { ISearchCepDTO } from "./SearchCepDTO";

export class SearchCepUseCase {
  constructor(private cepProvider: ICepProvider) {}

  async execute(data: ISearchCepDTO) {
    const cep = await this.cepProvider.findCep(data.cep).catch((error) => {
      return Promise.reject(error);
    });

    return Promise.resolve(cep);
  }
}

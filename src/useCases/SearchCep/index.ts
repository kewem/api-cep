import { CepProvider } from "../../providers/Cep/implementations/CepProvider";
import { cacheProvider } from "../../providers/Cache/implementations/CacheProvider";
import { SearchCepController } from "./SearchCepController";
import { SearchCepUseCase } from "./SearchCepUseCase";

const cepProvider = new CepProvider();

const searchCepUseCase = new SearchCepUseCase(cepProvider, cacheProvider);

const searchCepController = new SearchCepController(searchCepUseCase);

export { searchCepController, searchCepUseCase };

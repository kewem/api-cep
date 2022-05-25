import { CepProvider } from "../../providers/CepProvider/implementations/CepProvider";
import { SearchCepController } from "./SearchCepController";
import { SearchCepUseCase } from "./SearchCepUseCase";

const cepProvider = new CepProvider();

const searchCepUseCase = new SearchCepUseCase(cepProvider);

const searchCepController = new SearchCepController(searchCepUseCase);

export { searchCepController, searchCepUseCase };

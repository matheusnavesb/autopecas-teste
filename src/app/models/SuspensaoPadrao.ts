import { DadosTecnicos } from "./DadosTecnicos";
import { Peca } from "./Peca";

export class SuspensaoPadrao extends Peca {
  compatibilidade!: string;
  dadosTecnicos!: DadosTecnicos;

}

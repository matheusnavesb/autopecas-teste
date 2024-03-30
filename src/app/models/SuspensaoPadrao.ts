import { DadosTecnicos } from "./DadosTecnicos";
import { Peca } from "./Peca";

export class SuspensaoPadrao extends Peca {
  compatibilidade!: string;
  dadosTecnicos!: DadosTecnicos;

  constructor(id: number, nome: string, preco: number, descricao: string, compatibilidade: string, dadosTecnicos: DadosTecnicos) {
    super(id, nome, preco, descricao); // Chama o construtor da classe Pai (Peca) e passa o ID e outras propriedades
    this.compatibilidade = compatibilidade;
    this.dadosTecnicos = dadosTecnicos;
  }
}

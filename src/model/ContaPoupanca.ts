import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  private _aniversario: number;

  constructor(
    numero: number,
    agencia: number,
    titular: string,
    saldo: number,
    aniversario: number
  ) {
    super(numero, agencia, titular, saldo);
    this._aniversario = aniversario;
  }

  public get aniversario() {
    return this._aniversario;
  }

  public set aniversario(aniversario: number) {
    this._aniversario = aniversario;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Dia do Aniversário: " + this._aniversario);
  }
  public exibirTipoConta(): void {
    console.log("Conta Poupança");
  }
}

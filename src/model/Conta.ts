// obs1: Tô usando o # pra propriedades privadas
// obs2: Removi o atributo 'tipo' da classe Conta
// porque o tipo da conta agora é definido diretamente
// pelas classes filhas, através do método abstrato exibirTipoConta()
// no final do código

export abstract class Conta {
  #numero: number;
  #agencia: number;
  #titular: string;
  #saldo: number;

  constructor(numero: number, agencia: number, titular: string, saldo: number) {
  this.#numero = numero;
  this.#agencia = agencia;
  this.#titular = titular;
  this.#saldo = saldo;
  }

  get numero(): number {
    return this.#numero;
  }

  set numero(numero: number) {
    this.#numero = numero;
  }

  get agencia(): number {
    return this.#agencia;
  }

  set agencia(agencia: number) {
    this.#agencia = agencia;
  }

  get titular(): string {
    return this.#titular;
  }

  set titular(titular: string) {
    this.#titular = titular;
  }

  get saldo(): number {
    return this.#saldo;
  }

  set saldo(saldo: number) {
    this.#saldo = saldo;
  }

  sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log("\nValor inválido para saque!");
      return false;
    }

    if (this.#saldo < valor) {
      console.log("\nSaldo insuficiente!");
      return false;
    }

    this.#saldo -= valor;
    console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    return true;
  }

  depositar(valor: number): boolean {
    if (valor <= 0) {
      console.log("\nValor inválido para depósito!");
      return false;
    }

    this.#saldo += valor;
    console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    return true;
  }

  visualizar(): void {
    console.log("\n\n*****************************************************");
    console.log("Dados da Conta:");
    console.log("*****************************************************");
    console.log(`Número da Conta: ${this.#numero}`);
    console.log(`Agência: ${this.#agencia}`);
    console.log(`Titular: ${this.#titular}`);
    console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`);
  }

  abstract exibirTipoConta(): void;
  
}

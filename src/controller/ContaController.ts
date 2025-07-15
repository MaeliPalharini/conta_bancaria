import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { Colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  private numero: number = 0;

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  procurarPorNumero(numero: number): void {
    const contaEncontrada = this.listaContas.find(
      (conta) => conta.numero === numero
    );

    if (contaEncontrada) {
      contaEncontrada.visualizar();
    } else {
      console.log(
        Colors.fg.red,
        `\n Conta número ${numero} não encontrada!`,
        Colors.reset
      );
    }
  }

  cadastrar(conta: Conta): void {
    conta.numero = this.gerarNumero();
    this.listaContas.push(conta);

    console.log(
      Colors.fg.green,
      `\nConta número ${conta.numero} cadastrada com sucesso!`,
      Colors.reset
    );
  }

  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;

      console.log(
        Colors.fg.green,
        `\nConta número ${conta.numero} atualizada com sucesso!`,
        Colors.reset
      );
    } else {
      console.log(
        Colors.fg.red,
        `\nConta número ${conta.numero} não foi encontrada!`,
        Colors.reset
      );
    }
  }

  public deletar(numero: number): void {
    const contaEncontrada = this.buscarNoArray(numero);

    if (contaEncontrada != null) {
      this.listaContas = this.listaContas.filter(
        (conta) => conta.numero !== numero
      );
      console.log(
        Colors.fg.green,
        `\nConta número ${numero} deletada com sucesso!`,
        Colors.reset
      );
    } else {
      console.log(
        Colors.fg.red,
        `\nConta número ${numero} não encontrada!`,
        Colors.reset
      );
    }
  }

  public sacar(numero: number, valor: number): void {
    const contaEncontrada = this.listaContas.find(
      (conta) => conta.numero === numero
    );

    if (contaEncontrada) {
      contaEncontrada.sacar(valor);
    } else {
      console.log(
        Colors.fg.red,
        `\nConta número ${numero} não encontrada!`,
        Colors.reset
      );
    }
  }

  public depositar(numero: number, valor: number): void {
    const contaEncontrada = this.listaContas.find(
      (conta) => conta.numero === numero
    );

    if (contaEncontrada) {
      contaEncontrada.depositar(valor);
      console.log(
        Colors.fg.green,
        `\nDepósito na Conta número: ${numero} foi efetuado com sucesso!`,
        Colors.reset
      );
    } else {
      console.log(
        Colors.fg.red,
        `\nConta número ${numero} não encontrada!`,
        Colors.reset
      );
    }
  }

  public transferir(
    numeroOrigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    const contaOrigem = this.listaContas.find(
      (conta) => conta.numero === numeroOrigem
    );
    const contaDestino = this.listaContas.find(
      (conta) => conta.numero === numeroDestino
    );

    if (!contaOrigem) {
      console.log(
        Colors.fg.red,
        `\nConta de origem número ${numeroOrigem} não encontrada!`,
        Colors.reset
      );
      return;
    }

    if (!contaDestino) {
      console.log(
        Colors.fg.red,
        `\nConta de destino número ${numeroDestino} não encontrada!`,
        Colors.reset
      );
      return;
    }

    if (contaOrigem.sacar(valor)) {
      contaDestino.depositar(valor);
      console.log(
        Colors.fg.green,
        `\nTransferência de R$ ${valor.toFixed(2)} de ${
          contaOrigem.titular
        } para ${contaDestino.titular} realizada com sucesso!`,
        Colors.reset
      );
    } else {
      console.log(
        Colors.fg.red,
        `\nTransferência não realizada. Saldo insuficiente na conta de origem.`,
        Colors.reset
      );
    }
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }

    return null;
  }

  public gerarNumero(): number {
    return ++this.numero;
  }
}

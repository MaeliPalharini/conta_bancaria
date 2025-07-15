import readlineSync from "readline-sync";
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

const contas: ContaController = new ContaController();

function criarConta() {
  console.log(`${Colors.fg.whitestrong}\n\n→ Criar Conta\n\n${Colors.reset}`);

  agencia = readlineSync.questionInt("Digite o número da Agência: ");
  titular = readlineSync.question("Digite o Nome do Titular: ");
  tipo = readlineSync.keyInSelect(["Conta Corrente", "Conta Poupança"], "Tipo da Conta") + 1;
  saldo = readlineSync.questionFloat("Digite o Saldo da Conta (R$): ");

  if (tipo === 1) {
    limite = readlineSync.questionFloat("Digite o Limite da Conta Corrente (R$): ");
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
  } else if (tipo === 2) {
    aniversario = readlineSync.questionInt("Digite o Dia do Aniversário da Conta Poupança: ");
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
  }

  keyPress();
}

function listarContas() {
  console.log(`${Colors.fg.whitestrong}\n\nListar todas as Contas\n\n${Colors.reset}`);
  contas.listarTodas();
  keyPress();
}

function buscarConta() {
  console.log(`${Colors.fg.whitestrong}\n\n→ Consultar Conta por Número\n\n${Colors.reset}`);
  numero = readlineSync.questionInt("Digite o número da Conta: ");
  contas.procurarPorNumero(numero);
  keyPress();
}


export function sobre(): void {
  console.log("\n***************************************************");
  console.log("Projeto desenvolvido por:");
  console.log("Maeli Palharini — maeli.palharini@hotmail.com");
  console.log("GitHub: github.com/maeli-palharini");
  console.log("*****************************************************");
}

function exibirMenu(): void {
  console.clear();
  console.log(`${Colors.fg.magenta}******************${Colors.reset}`);
  console.log(`${Colors.fg.yellow}  BANCO PALHARINI  ${Colors.reset}`);
  console.log(`${Colors.fg.magenta}******************${Colors.reset}`);
  console.log("                                                     ");
  console.log("            1 - Criar Conta                          ");
  console.log("            2 - Listar todas as Contas               ");
  console.log("            3 - Buscar Conta por Número              ");
  console.log("            4 - Atualizar Dados da Conta             ");
  console.log("            5 - Apagar Conta                         ");
  console.log("            6 - Sacar                                ");
  console.log("            7 - Depositar                            ");
  console.log("            8 - Transferir valores entre Contas      ");
  console.log("            9 - Sair                                 ");
  console.log("                                                     ");
  console.log("*****************************************************");
  console.log("                                                     ");
}

export function main(): void {
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupança"];

  console.log("\nCriar Contas\n");

  let cc1: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    123,
    1,
    "João da Silva",
    1000,
    100.0
  );
  contas.cadastrar(cc1);

  let cc2: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    124,
    1,
    "Maria da Silva",
    2000,
    100.0
  );
  contas.cadastrar(cc2);

  let cp1: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Mariana dos Santos",
    4000,
    12
  );
  contas.cadastrar(cp1);

  let cp2: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Juliana Ramos",
    8000,
    15
  );
  contas.cadastrar(cp2);

  contas.listarTodas();

  while (true) {
    exibirMenu();

    opcao = readlineSync.questionInt("Entre com a opção desejada: ");

    if (opcao === 9) {
      console.log("\nBanco Palharini — o seu futuro começa aqui!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        criarConta();
        break;
      case 2:
        listarContas();
        break;
      case 3:
        buscarConta();
        break;
      case 4:
        console.log(
          Colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          Colors.reset
        );

        console.log("Digite o número da conta:");
        numero = readlineSync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log("Digite o número da agência:");
          agencia = readlineSync.questionInt("");

          console.log("Digite o nome do titular:");
          titular = readlineSync.question("");

          tipo = conta.tipo;

          console.log("Digite o saldo da conta:");
          saldo = readlineSync.questionFloat("");

          switch (tipo) {
            case 1:
              console.log("Digite o limite da conta:");
              limite = readlineSync.questionFloat("");

              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;

            case 2:
              console.log("Digite o dia do aniversário da conta:");
              aniversario = readlineSync.questionInt("");

              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(
            Colors.fg.red,
            `\nConta número ${numero} não encontrada!`,
            Colors.reset
          );
        }

        keyPress();
        break;

      case 5:
        console.log(Colors.fg.magenta, "\nApagar Conta\n", Colors.reset);
        numero = readlineSync.questionInt("Digite o número da conta: ");
        contas.deletar(numero);

        break;

      case 6:
        console.log(Colors.fg.whitestrong, "\n\nSaque\n\n", Colors.reset);
        numero = readlineSync.questionInt("Digite o número da conta: ");
        valor = readlineSync.questionFloat("Digite o valor do saque: ");
        contas.sacar(numero, valor);
        keyPress();
        
        break;

      case 7:
        console.log(`${Colors.fg.cyan}\n→ Depósito\n${Colors.reset}`);
        numero = readlineSync.questionInt("Digite o número da Conta: ");
        valor = readlineSync.questionFloat("Digite o valor do Depósito (R$): ");
        contas.depositar(numero, valor);

        break;

      case 8:
        case 8:
        console.log(Colors.fg.cyan, "\n→ Transferência entre contas\n", Colors.reset);
        console.log("Digite o número da conta de origem: ");
        numero = readlineSync.questionInt("");
        console.log("Digite o número da conta de destino: ");
        numeroDestino = readlineSync.questionInt("");
        console.log("Digite o valor da transferência (R$): ");
        valor = readlineSync.questionFloat("");
        contas.transferir(numero, numeroDestino, valor);

        break;
    }
  }
}

main();

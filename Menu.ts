import readlineSync from "readline-sync";
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";


function criarConta()               { console.log("\n→ Criar Conta (TODO)\n"); }
function listarContas()             { console.log("\n→ Listar Contas (TODO)\n"); }
function buscarConta()              { console.log("\n→ Buscar Conta (TODO)\n"); }
function atualizarConta()           { console.log("\n→ Atualizar Conta (TODO)\n"); }
function apagarConta()              { console.log("\n→ Apagar Conta (TODO)\n"); }
function saque()                    { console.log("\n→ Saque (TODO)\n"); }
function deposito()                 { console.log("\n→ Depósito (TODO)\n"); }
function transferenciaEntreContas() { console.log("\n→ Transferência (TODO)\n"); }

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
  let opcao: number;

  const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
  conta.visualizar();
  conta.sacar(10500);
  conta.visualizar();
  conta.depositar(5000);
  conta.visualizar();

  const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {
    exibirMenu();

    opcao = readlineSync.questionInt("Entre com a opção desejada: ");

    if (opcao === 9) {
      console.log("\nBanco Palharini — o seu futuro começa aqui!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1: criarConta();               break;
      case 2: listarContas();             break;
      case 3: buscarConta();              break;
      case 4: atualizarConta();           break;
      case 5: apagarConta();              break;
      case 6: saque();                    break;
      case 7: deposito();                 break;
      case 8: transferenciaEntreContas(); break;
      default:
        console.log("\nOpção inválida!\n");
    }
  }
}

main();

import readlinesync from "readline-sync";
import { Colors } from "./src/util/Colors";

import readlineSync from "readline-sync";

function criarConta()               { console.log("\n→ Criar Conta (TODO)\n"); }
function listarContas()             { console.log("\n→ Listar Contas (TODO)\n"); }
function buscarConta()              { console.log("\n→ Buscar Conta (TODO)\n"); }
function atualizarConta()           { console.log("\n→ Atualizar Conta (TODO)\n"); }
function apagarConta()              { console.log("\n→ Apagar Conta (TODO)\n"); }
function saque()                    { console.log("\n→ Saque (TODO)\n"); }
function deposito()                 { console.log("\n→ Depósito (TODO)\n"); }
function transferenciaEntreContas() { console.log("\n→ Transferência (TODO)\n"); }

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto desenvolvido por:");
  console.log("Maeli Palharini — maeli.palharini@hotmail.com");
  console.log("GitHub: github.com/maeli-palharini");
  console.log("*****************************************************");
}

export function main(): void {
  let opcao: number;

  while (true) {
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

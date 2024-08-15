import { Conta } from './Conta';

const conta1: Conta = new Conta( 1, 'Jorge', 300 );
const conta2: Conta = new Conta( 2, 'Megania', 450);
const conta3: Conta = new Conta( 3, 'Lara', 320);

console.log(conta1.obterSaldo());
console.log(conta2.saque(200));
console.log(conta3.deposito(300));

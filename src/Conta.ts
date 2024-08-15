export class Conta {

    private numeroConta: number;
    private nomeTitular: string;
    private saldo: number;

    public constructor(_numeroConta: number, _nomeTitular: string, _saldo: number) {
        this.numeroConta = _numeroConta;
        this.nomeTitular = _nomeTitular;
        this.saldo = _saldo;
    }

    public getNumeroConta(): number {
        return this.numeroConta;
    }

    public setNumeroConta(_numero: number): void {
        this.numeroConta = _numero;
    }

    public getNomeTitular(): string {
        return this.nomeTitular;
    }

    public setNomeTitular(_nomeTitular: string): void {
        this.nomeTitular = _nomeTitular;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(_saldo: number): void {
        this.saldo = _saldo;
    }

    public obterSaldo(): number {
        return this.saldo;
    }

    public saque(valorSacado: number): number {
        return this.saldo - valorSacado;
    }

    public deposito(valorDeposito: number): void {
        this.saldo = this.saldo + valorDeposito;
        console.log(this.saldo);
    }
    
}

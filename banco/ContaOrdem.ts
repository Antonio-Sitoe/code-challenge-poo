import { Conta } from './Conta'

export class ContaOrdem extends Conta {
  private taxa: number = 0.1
  private regime: string

  constructor(numero: number, titular: string, saldo: number, regime: string) {
    super(numero, titular, saldo)
    this.regime = regime
  }

  public saldoReal(valor: number): number {
    const saldoReal = this.getSaldo() + valor + (valor * 1) / 100
    return saldoReal
  }

  public depositar(valor: number) {
    const saldo = valor + valor * this.taxa
    this.setSaldo(saldo)
  }
}

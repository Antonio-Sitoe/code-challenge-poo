import { Conta } from './Conta'

/**
 * class ContaPrazo*/
export class ContaPrazo extends Conta {
  private taxa = 0.03

  constructor(numero: number, titular: string, saldo: number) {
    super(numero, titular, saldo)
  }

  public depositar(valor: number) {
    const saldo = valor + valor * this.taxa
    this.setSaldo(saldo)
  }
  public saldoReal(valor: number): number {
    const saldoReal = this.getSaldo() + valor - (valor * 3) / 100
    return saldoReal
  }
}

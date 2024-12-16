import { SaldoReal } from './SaldoReal'

/**
 * abstract class Conta
 */
export abstract class Conta implements SaldoReal {
  protected numero: number
  protected titular: string
  protected saldo: number

  constructor(numero: number, titular: string, saldo: number) {
    this.numero = numero
    this.titular = titular
    this.saldo = saldo
  }

  public abstract saldoReal(valor: number): number

  public abstract depositar(valor: number): void

  public getNumero(): number {
    return this.numero
  }

  public setNumero(numero: number): void {
    this.numero = numero
  }

  public getTitular(): string {
    return this.titular
  }

  public setTitular(titular: string): void {
    this.titular = titular
  }

  public getSaldo(): number {
    return this.saldo
  }

  public setSaldo(saldo: number): void {
    this.saldo = saldo
  }

  public toString() {
    return (
      'Número: ' +
      this.numero +
      ', Titular: ' +
      this.titular +
      ', Saldo: ' +
      this.saldo
    )
  }
}

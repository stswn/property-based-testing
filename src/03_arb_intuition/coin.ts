import * as fc from 'fast-check';

export class Coin {
  constructor(public readonly value: number){}

  public static readonly max = new Coin(1000000);

  public equals(other: Coin) {
    return this.value === other.value;
  }

  /**
   * Adds two coins, if sum is above treshold return max coin
   * @param left
   * @param right
   */
  public static add(left: Coin, right: Coin): Coin {
    const sum = left.value + right.value;
    if (sum < Coin.max.value) {
      return new Coin(sum);
    }
    return Coin.max;
  }
}

export const CoinArb =
  fc.nat(Coin.max.value).map(value => new Coin(value));










export const BetterCoinArb =
  fc.nat(3).chain( n =>
    fc.oneof(
      fc.constant(n),
      fc.constant(Coin.max.value - n),
      fc.nat(Coin.max.value),
    ).map(value => new Coin(value))
  );

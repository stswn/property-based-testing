import * as fc from 'fast-check';
import { Coin, CoinArb, BetterCoinArb } from './coin';

export function coinArbStats(coinArbitrary: fc.Arbitrary<Coin>): void {
  const tupleArbitrary = fc.tuple(coinArbitrary, coinArbitrary);

  // Displays statistics of given arbitrary and labelling function
  fc.statistics(
    tupleArbitrary,
    ([coin1, coin2]) => {

      if (Math.abs(coin1.value + coin2.value - Coin.max.value) < 3) {
        return 'Borderline';
      }

      if (coin1.value + coin2.value > Coin.max.value) {
        return 'Overflow';
      }

      return 'Normal';
    },
  );

  // Returns sample values for given arbitrary
  const sample = fc.sample(tupleArbitrary, 10);
  sample.forEach(([coin1, coin2]) =>
    console.log(`[Coin(${coin1.value}), Coin(${coin2.value})]`
  ));
}

// console.log('\n');
// console.log('First coin arbitrary stats:');
// coinArbStats(CoinArb);
console.log('\n');
console.log('Better coin arbitrary stats:');
coinArbStats(BetterCoinArb);

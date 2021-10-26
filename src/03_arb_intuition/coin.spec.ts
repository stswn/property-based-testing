import * as fc from 'fast-check';
import { Coin, CoinArb, BetterCoinArb } from './coin';

describe('adding two coins', function () {
  it('should produce sum if it is below max value and max coin otherwise', () => {
    fc.assert(
      fc.property(BetterCoinArb, BetterCoinArb,(coin1, coin2) => {
        const sumCoin = Coin.add(coin1, coin2);
        const expectedSumValue = coin1.value + coin2.value > Coin.max.value ? Coin.max.value : coin1.value + coin2.value;
        expect(sumCoin.value).toEqual(expectedSumValue);
      })
    );
  })
});

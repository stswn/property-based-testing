"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fc = require("fast-check");
var coin_1 = require("./coin");
describe('adding two coins', function () {
    it('should produce sum if it is below max value and max coin otherwise', function () {
        fc.assert(fc.property(coin_1.CoinArb, coin_1.CoinArb, function (coin1, coin2) {
            var sumCoin = coin_1.Coin.add(coin1, coin2);
            var expectedSumValue = coin1.value + coin2.value > coin_1.Coin.max.value ? coin_1.Coin.max.value : coin1.value + coin2.value;
            expect(sumCoin.value).toEqual(expectedSumValue);
        }));
    });
});

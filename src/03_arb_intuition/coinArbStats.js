"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinArbStats = void 0;
var fc = require("fast-check");
var coin_1 = require("./coin");
function coinArbStats(coinArbitrary) {
    var tupleArbitrary = fc.tuple(coinArbitrary, coinArbitrary);
    fc.statistics(tupleArbitrary, function (_a) {
        var _b = __read(_a, 2), coin1 = _b[0], coin2 = _b[1];
        if (Math.abs(coin1.value + coin2.value - coin_1.Coin.max.value) < 3) {
            return 'Borderline';
        }
        if (coin1.value + coin2.value > coin_1.Coin.max.value) {
            return 'Overflow';
        }
        return 'Normal';
    });
    var sample = fc.sample(tupleArbitrary, 10);
    sample.forEach(function (_a) {
        var _b = __read(_a, 2), coin1 = _b[0], coin2 = _b[1];
        return console.log("[Coin(" + coin1.value + "), Coin(" + coin2.value + ")]");
    });
}
exports.coinArbStats = coinArbStats;
console.log('\n');
console.log('First coin arbitrary stats:');
coinArbStats(coin_1.CoinArb);
console.log('\n');
console.log('Better coin arbitrary stats:');
coinArbStats(coin_1.BetterCoinArb);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetterCoinArb = exports.CoinArb = exports.Coin = void 0;
var fc = require("fast-check");
var Coin = /** @class */ (function () {
    function Coin(value) {
        this.value = value;
    }
    Coin.prototype.equals = function (other) {
        return this.value === other.value;
    };
    Coin.add = function (left, right) {
        var sum = left.value + right.value;
        if (sum < Coin.max.value - 1) {
            return new Coin(sum);
        }
        return Coin.max;
    };
    Coin.max = new Coin(1000000);
    return Coin;
}());
exports.Coin = Coin;
exports.CoinArb = fc.nat(Coin.max.value).map(function (value) { return new Coin(value); });
exports.BetterCoinArb = fc.nat(3).chain(function (n) {
    return fc.oneof(fc.constant(n), fc.constant(Coin.max.value - n), fc.nat(Coin.max.value)).map(function (value) { return new Coin(value); });
});

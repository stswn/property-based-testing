"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fc = require("fast-check");
var reverse_1 = require("./reverse");
describe('reverse', function () {
    it('applied twice should return original array', function () {
        fc.assert(fc.property(fc.array(fc.integer()), function (data) {
            expect(reverse_1.reverse(reverse_1.reverse(data))).toEqual(data);
        }));
    });
    it('should array in original order', function () {
        fc.assert(fc.property(fc.array(fc.integer()), function (data) {
            var reversed = reverse_1.reverse(data);
            reversed.forEach(function (value, idx) { return expect(value).toEqual(data[data.length - idx - 1]); });
        }), { verbose: true });
    });
});

"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fc = require("fast-check");
var prand = require("pure-rand");
var arrayGen = fc.array(fc.integer());
var randomGenerator = prand.mersenne(42);
var arraySample = arrayGen.generate(new fc.Random(randomGenerator));
console.log("Generated array: [" + arraySample.value + "]");
var idx = 1;
try {
    for (var _b = __values(arraySample.shrink()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var shrinkedSample = _c.value;
        console.log("Shrinked array " + idx + ": [" + shrinkedSample.value + "]");
        idx++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}

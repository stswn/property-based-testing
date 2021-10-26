"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var fast_check_1 = require("fast-check");
var MusicPlayerModel_1 = require("./MusicPlayerModel");
var MusicPlayerCommandsArb_1 = require("./MusicPlayerCommandsArb");
var ReducerReal_1 = require("./ReducerReal");
var reducer_1 = require("../src/reducer");
describe('MusicPlayer', function () {
    it('should detect potential issues with the MusicPlayer', function () {
        return fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.set(MusicPlayerCommandsArb_1.TrackNameArb, 1, 10), MusicPlayerCommandsArb_1.MusicPlayerCommandsArb, function (initialTracks, commands) {
            var e_1, _a;
            var real = new ReducerReal_1.ReducerReal(__assign(__assign({}, reducer_1.initialState), { tracks: initialTracks }), reducer_1.default(true));
            var model = new MusicPlayerModel_1.MusicPlayerModel();
            model.numTracks = initialTracks.length;
            try {
                for (var initialTracks_1 = __values(initialTracks), initialTracks_1_1 = initialTracks_1.next(); !initialTracks_1_1.done; initialTracks_1_1 = initialTracks_1.next()) {
                    var t = initialTracks_1_1.value;
                    model.tracksAlreadySeen[t] = true;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (initialTracks_1_1 && !initialTracks_1_1.done && (_a = initialTracks_1.return)) _a.call(initialTracks_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            fast_check_1.default.modelRun(function () { return ({ model: model, real: real }); }, commands);
        }));
    });
});

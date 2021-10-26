"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReducerReal = void 0;
var ReducerReal = /** @class */ (function () {
    function ReducerReal(state, reducer) {
        this.reducer = reducer;
        this._currentState = state;
    }
    Object.defineProperty(ReducerReal.prototype, "currentState", {
        get: function () {
            return this._currentState;
        },
        enumerable: false,
        configurable: true
    });
    ReducerReal.prototype.applyAction = function (action) {
        this._currentState = this.reducer(this._currentState, action);
    };
    return ReducerReal;
}());
exports.ReducerReal = ReducerReal;

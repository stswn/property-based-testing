"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayCommand = void 0;
var assert = require("assert");
var actions_1 = require("../src/actions");
var reducer_1 = require("../src/reducer");
var PlayCommand = /** @class */ (function () {
    function PlayCommand() {
    }
    PlayCommand.prototype.check = function (m) {
        return true;
    };
    PlayCommand.prototype.action = function () {
        return actions_1.playAction;
    };
    PlayCommand.prototype.run = function (m, r) {
        r.applyAction(this.action());
        m.isPlaying = true;
        assert.ok(reducer_1.selectPlaying(r.currentState), 'Not playing after pressing play!');
    };
    PlayCommand.prototype.toString = function () {
        return 'Play';
    };
    return PlayCommand;
}());
exports.PlayCommand = PlayCommand;

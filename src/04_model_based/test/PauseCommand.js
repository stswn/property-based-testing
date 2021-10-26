"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauseCommand = void 0;
var assert = require("assert");
var actions_1 = require("../src/actions");
var reducer_1 = require("../src/reducer");
var PauseCommand = /** @class */ (function () {
    function PauseCommand() {
    }
    PauseCommand.prototype.check = function (m) {
        return true;
    };
    PauseCommand.prototype.action = function () {
        return actions_1.pauseAction;
    };
    PauseCommand.prototype.run = function (m, r) {
        r.applyAction(this.action());
        m.isPlaying = false;
        assert.ok(!reducer_1.selectPlaying(r.currentState), 'Still playing after pressing pause!');
    };
    PauseCommand.prototype.toString = function () {
        return 'Pause';
    };
    return PauseCommand;
}());
exports.PauseCommand = PauseCommand;

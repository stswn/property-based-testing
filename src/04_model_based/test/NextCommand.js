"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextCommand = void 0;
var assert = require("assert");
var actions_1 = require("../src/actions");
var reducer_1 = require("../src/reducer");
var NextCommand = /** @class */ (function () {
    function NextCommand() {
    }
    NextCommand.prototype.check = function (m) {
        return true;
    };
    NextCommand.prototype.action = function () {
        return actions_1.nextAction;
    };
    NextCommand.prototype.run = function (m, r) {
        var trackBefore = reducer_1.selectCurrentTrack(r.currentState);
        r.applyAction(this.action());
        assert.strictEqual(reducer_1.selectPlaying(r.currentState), m.isPlaying, "Changed playing state  from \"" + m.isPlaying + "\" after going to next track!");
        var trackNow = reducer_1.selectCurrentTrack(r.currentState);
        if (m.numTracks === 1) {
            assert.strictEqual(trackNow, trackBefore, 'Did not loop to the same track!');
        }
        else {
            assert.notStrictEqual(trackNow, trackBefore, "Playing the same track \"" + trackBefore + "\" after pressing next!");
        }
    };
    NextCommand.prototype.toString = function () {
        return 'Next';
    };
    return NextCommand;
}());
exports.NextCommand = NextCommand;

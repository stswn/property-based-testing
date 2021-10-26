"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTrackCommand = void 0;
var assert = require("assert");
var actions_1 = require("../src/actions");
var reducer_1 = require("../src/reducer");
var AddTrackCommand = /** @class */ (function () {
    function AddTrackCommand(position, trackName) {
        this.position = position;
        this.trackName = trackName;
    }
    AddTrackCommand.prototype.action = function () {
        return actions_1.addTrackAction(this.position, this.trackName);
    };
    AddTrackCommand.prototype.check = function (m) {
        return !m.tracksAlreadySeen[this.trackName];
    };
    AddTrackCommand.prototype.run = function (m, r) {
        var trackBefore = reducer_1.selectCurrentTrack(r.currentState);
        r.applyAction(this.action());
        assert.strictEqual(reducer_1.selectPlaying(r.currentState), m.isPlaying, "Changed playing state from \"" + m.isPlaying + "\" after track addition");
        var trackNow = reducer_1.selectCurrentTrack(r.currentState);
        assert.strictEqual(trackNow, trackBefore, "Changed played track after track addition from \"" + trackBefore + "\" to \"" + trackNow + "\"");
        ++m.numTracks;
        m.tracksAlreadySeen[this.trackName] = true;
    };
    AddTrackCommand.prototype.toString = function () {
        return "AddTrack(" + this.position + ", \"" + this.trackName + "\")";
    };
    return AddTrackCommand;
}());
exports.AddTrackCommand = AddTrackCommand;

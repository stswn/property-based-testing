"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlayerCommandsArb = exports.TrackNameArb = void 0;
var fast_check_1 = require("fast-check");
var PlayCommand_1 = require("./PlayCommand");
var PauseCommand_1 = require("./PauseCommand");
var NextCommand_1 = require("./NextCommand");
var AddTrackCommand_1 = require("./AddTrackCommand");
exports.TrackNameArb = fast_check_1.default.hexaString(1, 10);
exports.MusicPlayerCommandsArb = fast_check_1.default.commands([
    fast_check_1.default.constant(new PlayCommand_1.PlayCommand()),
    fast_check_1.default.constant(new PauseCommand_1.PauseCommand()),
    fast_check_1.default.constant(new NextCommand_1.NextCommand()),
    fast_check_1.default.record({ position: fast_check_1.default.nat(100), trackName: exports.TrackNameArb }).map(function (d) { return new AddTrackCommand_1.AddTrackCommand(d.position, d.trackName); })
]);

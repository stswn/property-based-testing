"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlayerModel = void 0;
var MusicPlayerModel = /** @class */ (function () {
    function MusicPlayerModel() {
        this.isPlaying = false;
        this.numTracks = 0;
        this.tracksAlreadySeen = {}; // our model forbid to append twice the same track
    }
    return MusicPlayerModel;
}());
exports.MusicPlayerModel = MusicPlayerModel;

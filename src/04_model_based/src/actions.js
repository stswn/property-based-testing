"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTrackAction = exports.nextAction = exports.pauseAction = exports.playAction = exports.ADD_TRACK = exports.NEXT = exports.PAUSE = exports.PLAY = void 0;
exports.PLAY = 'musicPlayer/PLAY';
exports.PAUSE = 'musicPlayer/PAUSE';
exports.NEXT = 'musicPlayer/NEXT';
exports.ADD_TRACK = 'musicPlayer/ADD_TRACK';
exports.playAction = { type: exports.PLAY };
exports.pauseAction = { type: exports.PAUSE };
exports.nextAction = { type: exports.NEXT };
exports.addTrackAction = function (position, trackName) { return ({
    type: exports.ADD_TRACK,
    position: position,
    trackName: trackName,
}); };

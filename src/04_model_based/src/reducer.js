"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPlaying = exports.selectCurrentTrack = exports.initialState = void 0;
var immer_1 = require("immer");
var actions_1 = require("./actions");
exports.initialState = {
    playing: false,
    tracks: [],
    currentTrackPosition: 0,
};
var musicPlayerReducer = function (buggy) { return function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    return immer_1.default(state, function (draft) {
        switch (action.type) {
            case actions_1.PLAY:
                draft.playing = true;
                break;
            case actions_1.PAUSE:
                draft.playing = false;
                break;
            case actions_1.NEXT:
                draft.currentTrackPosition += 1;
                if (draft.currentTrackPosition >= draft.tracks.length) {
                    draft.currentTrackPosition = 0;
                }
                break;
            case actions_1.ADD_TRACK:
                draft.tracks.splice(action.position, 0, action.trackName);
                if (!buggy && draft.currentTrackPosition >= action.position) {
                    draft.currentTrackPosition += 1;
                }
                break;
        }
    });
}; };
exports.default = musicPlayerReducer;
function selectCurrentTrack(state) {
    return state.currentTrackPosition < state.tracks.length ?
        state.tracks[state.currentTrackPosition] :
        null;
}
exports.selectCurrentTrack = selectCurrentTrack;
function selectPlaying(state) {
    return state.playing;
}
exports.selectPlaying = selectPlaying;

import produce from 'immer';
import { ADD_TRACK, MusicPlayerAction, NEXT, PAUSE, PLAY } from './actions';

export interface MusicPlayerState {
  playing: boolean;
  tracks: string[];
  currentTrackPosition: number;
}

export const initialState: MusicPlayerState = {
  playing: false,
  tracks: [],
  currentTrackPosition: 0,
}

const musicPlayerReducer = (
  buggy: boolean
) => (
  state: MusicPlayerState = initialState,
  action: MusicPlayerAction,
): MusicPlayerState =>
  produce(state, draft => {
    switch (action.type) {
      case PLAY:
        draft.playing = true;
        break;
      case PAUSE:
        draft.playing = false;
        break;
      case NEXT:
        draft.currentTrackPosition += 1;
        if (draft.currentTrackPosition >= draft.tracks.length) {
          draft.currentTrackPosition = 0;
        }
        break;
      case ADD_TRACK:
        draft.tracks.splice(action.position, 0, action.trackName);
        if (!buggy && draft.currentTrackPosition >= action.position) {
          draft.currentTrackPosition += 1;
        }
        break;
    }
  });

export default musicPlayerReducer;

export function selectCurrentTrack(state: MusicPlayerState): string | null {
  return state.currentTrackPosition < state.tracks.length ?
    state.tracks[state.currentTrackPosition] :
    null;
}

export function selectPlaying(state: MusicPlayerState): boolean {
  return state.playing;
}

export const PLAY = 'musicPlayer/PLAY';
export const PAUSE = 'musicPlayer/PAUSE';
export const NEXT = 'musicPlayer/NEXT';
export const ADD_TRACK = 'musicPlayer/ADD_TRACK';

export interface PlayAction {
  type: typeof PLAY;
}

export interface PauseAction {
  type: typeof PAUSE;
}

export interface NextAction {
  type: typeof NEXT;
}

export interface AddTrackAction {
  type: typeof ADD_TRACK;
  position: number;
  trackName: string;
}

export type MusicPlayerAction =
  | PlayAction
  | PauseAction
  | NextAction
  | AddTrackAction;

export const playAction: MusicPlayerAction = { type: PLAY };

export const pauseAction: MusicPlayerAction = { type: PAUSE };

export const nextAction: MusicPlayerAction = { type: NEXT };

export const addTrackAction = (position: number, trackName: string): MusicPlayerAction => ({
  type: ADD_TRACK,
  position,
  trackName,
})

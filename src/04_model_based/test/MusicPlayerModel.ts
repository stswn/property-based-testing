import fc from 'fast-check';
import { ReducerReal } from './ReducerReal';
import { MusicPlayerState } from '../src/reducer';
import { MusicPlayerAction } from '../src/actions';

export class MusicPlayerModel {
  isPlaying = false;
  numTracks = 0;
  tracksAlreadySeen: { [Key: string]: boolean } = {}; // our model forbid to append twice the same track
}

export type MusicPlayerReal = ReducerReal<MusicPlayerState, MusicPlayerAction>;

export interface MusicPlayerCommand extends fc.Command<MusicPlayerModel, MusicPlayerReal> {
  action(): MusicPlayerAction;
}

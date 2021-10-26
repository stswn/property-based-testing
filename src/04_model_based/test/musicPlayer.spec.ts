import fc from 'fast-check';
import { MusicPlayerModel } from './MusicPlayerModel';
import { MusicPlayerCommandsArb, TrackNameArb } from './MusicPlayerCommandsArb';
import { ReducerReal } from './ReducerReal';
import musicPlayerReducer, { initialState } from '../src/reducer';

describe('MusicPlayer', () => {
  it('should detect potential issues with the MusicPlayer', () =>
    fc.assert(
      fc.property(fc.set(TrackNameArb, 1, 10), MusicPlayerCommandsArb, (initialTracks, commands) => {
        const real = new ReducerReal(
          { ...initialState, tracks: initialTracks },
          musicPlayerReducer(true)
        );
        const model = new MusicPlayerModel();
        model.numTracks = initialTracks.length;
        for (const t of initialTracks) {
          model.tracksAlreadySeen[t] = true;
        }
        fc.modelRun(() => ({ model, real }), commands);
      }),
    ),
  );
});

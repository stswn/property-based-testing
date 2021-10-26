import { MusicPlayerCommand, MusicPlayerModel, MusicPlayerReal } from './MusicPlayerModel';
import * as assert from 'assert';
import { addTrackAction } from '../src/actions';
import { selectCurrentTrack, selectPlaying } from '../src/reducer';

export class AddTrackCommand implements MusicPlayerCommand {
  constructor(readonly position: number, readonly trackName: string) {}

  action() {
    return addTrackAction(this.position, this.trackName)
  }

  check(m: MusicPlayerModel) {
    return !m.tracksAlreadySeen[this.trackName];
  }

  run(m: MusicPlayerModel, r: MusicPlayerReal) {
    const trackBefore = selectCurrentTrack(r.currentState);
    r.applyAction(this.action());
    assert.strictEqual(selectPlaying(r.currentState), m.isPlaying,
      `Changed playing state from "${m.isPlaying}" after track addition`);
    const trackNow = selectCurrentTrack(r.currentState);
    assert.strictEqual(trackNow, trackBefore,
      `Changed played track after track addition from "${trackBefore}" to "${trackNow}"`);
    ++m.numTracks;
    m.tracksAlreadySeen[this.trackName] = true;
  }

  toString() {
    return `AddTrack(${this.position}, "${this.trackName}")`;
  }
}

import { MusicPlayerCommand, MusicPlayerModel, MusicPlayerReal } from './MusicPlayerModel';
import * as assert from 'assert';
import { nextAction } from '../src/actions';
import { selectCurrentTrack, selectPlaying } from '../src/reducer';

export class NextCommand implements MusicPlayerCommand {
  check(m: MusicPlayerModel) {
    return true;
  }

  action() {
    return nextAction;
  }

  run(m: MusicPlayerModel, r: MusicPlayerReal) {
    const trackBefore = selectCurrentTrack(r.currentState);
    r.applyAction(this.action());
    assert.strictEqual(selectPlaying(r.currentState), m.isPlaying,
      `Changed playing state  from "${m.isPlaying}" after going to next track!`);
    const trackNow = selectCurrentTrack(r.currentState);
    if (m.numTracks === 1) {
      assert.strictEqual(trackNow, trackBefore, 'Did not loop to the same track!');
    } else {
      assert.notStrictEqual(trackNow, trackBefore,
        `Playing the same track "${trackBefore}" after pressing next!`);
    }
  }

  toString() {
    return 'Next';
  }
}

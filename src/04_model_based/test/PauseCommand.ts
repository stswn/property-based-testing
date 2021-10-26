import { MusicPlayerCommand, MusicPlayerModel, MusicPlayerReal } from './MusicPlayerModel';
import * as assert from 'assert';
import { pauseAction } from '../src/actions';
import { selectPlaying } from '../src/reducer';

export class PauseCommand implements MusicPlayerCommand {
  check(m: MusicPlayerModel) {
    return true;
  }

  action() {
    return pauseAction;
  }

  run(m: MusicPlayerModel, r: MusicPlayerReal) {
    r.applyAction(this.action());
    m.isPlaying = false;
    assert.ok(!selectPlaying(r.currentState),
      'Still playing after pressing pause!');
  }

  toString() {
    return 'Pause';
  }
}

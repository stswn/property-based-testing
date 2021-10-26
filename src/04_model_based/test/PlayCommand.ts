import { MusicPlayerCommand, MusicPlayerModel, MusicPlayerReal } from './MusicPlayerModel';
import * as assert from 'assert';
import { playAction } from '../src/actions';
import { selectPlaying } from '../src/reducer';

export class PlayCommand implements MusicPlayerCommand {
  check(m: MusicPlayerModel) {
    return true;
  }

  action() {
    return playAction;
  }

  run(m: MusicPlayerModel, r: MusicPlayerReal) {
    r.applyAction(this.action());
    m.isPlaying = true;
    assert.ok(selectPlaying(r.currentState),
      'Not playing after pressing play!');
  }

  toString() {
    return 'Play';
  }
}

import * as fc from 'fast-check';
import { reverse } from './reverse';

describe('reverse', function () {

  it('applied twice should return original array', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()),data => {
        expect(reverse(reverse(data))).toEqual(data)
      }),
    );
  })





























  it('should array in original order', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()),data => {
        const reversed = reverse(data);
        reversed.forEach((value, idx) => expect(value).toEqual(data[data.length-idx-1]))
      }),
      { verbose: true },
    );
  })

});

import * as fc from 'fast-check';
import * as prand from 'pure-rand';

const arrayGen = fc.array(fc.integer());
const randomGenerator = prand.mersenne(42);
const arraySample = arrayGen.generate(new fc.Random(randomGenerator));

console.log(`Generated array: [${arraySample.value}]`);
let idx = 1;
for (const shrinkedSample of arraySample.shrink().take(10)) {
  console.log(`Shrinked array ${idx}: [${shrinkedSample.value}]`);
  idx++;
}

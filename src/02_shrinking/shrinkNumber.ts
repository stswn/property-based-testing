import * as fc from 'fast-check';
import * as prand from 'pure-rand';

const numberGen = fc.integer();
const randomGenerator = prand.mersenne(42);
const numberSample = numberGen.generate(new fc.Random(randomGenerator));

console.log(`Generated number: ${numberSample.value}`);
let idx = 1;
for (const shrinkedSample of numberSample.shrink().take(10)) {
  console.log(`Shrinked number ${idx}: ${shrinkedSample.value}`);
  idx++;
}

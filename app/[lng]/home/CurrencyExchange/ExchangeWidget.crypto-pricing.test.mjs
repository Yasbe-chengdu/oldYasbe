import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(resolve(currentDir, 'ExchangeWidget.tsx'), 'utf8');

const routeSource = readFileSync(resolve(currentDir, '../../../api/crypto/route.ts'), 'utf8');

assert.match(source, /fetch\('\/api\/crypto'\)/);
assert.match(source, /Array\.isArray\(pricingPayload\?\.data\)/);
assert.match(source, /crypto\.coinCode \?\? crypto\.code/);
assert.doesNotMatch(source, /cc => cc\.code == crypto\.code/);
assert.match(source, /cIndex === -1/);
assert.match(routeSource, /fetch\('https:\/\/api\.beeznis\.com\/api\/crypto\/pricing'/);
assert.match(routeSource, /coin\.coinCode/);
assert.match(routeSource, /code: coin\.coinCode/);

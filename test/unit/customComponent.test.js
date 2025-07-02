import path from 'path';
import { testBasicMarkup } from './testUtils.js';

testBasicMarkup(path.resolve('./test/unit/fixtures/custom-component/range.js'), false, ['range'], '../..');

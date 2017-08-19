import proxy from './proxy';

import helloWorld from './src/helloWorld';

export const hello = proxy.bind(null, helloWorld);

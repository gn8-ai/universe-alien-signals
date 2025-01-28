/**
 * @type {'ignore-ast'}
 */
const astFormat = 'ignore-ast';

/**
 * @type {import('prettier').Plugin}
 */
export default {
  languages: [
    {
      name: 'ignore',
      parsers: ['ignore-parser'],
    },
  ],

  parsers: {
    ignore: {
      astFormat,
      parse: (source) => source,
      locStart: () => 0,
      locEnd: (node) => node.length,
    },
  },

  printers: {
    [astFormat]: {
      print: (path) => path.getNode() || '',
    },
  },
};

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      locEnd: (node) => node.length,
    },
  },

  printers: {
    [astFormat]: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      print: (path) => path.getNode() || '',
    },
  },
};

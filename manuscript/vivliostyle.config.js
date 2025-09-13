// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
  title: '神とストゼロと女騎士 ~限界OLとショタ魔王の共同生活~',
  author: 'Author Name',
  language: 'ja',
  size: 'A4',
  image: 'ghcr.io/vivliostyle/cli:9.6.0',
  entry: [
    'chapters/chapter-01.md',
    'chapters/chapter-02.md',
    'chapters/chapter-03.md',
    'chapters/chapter-04.md',
    'chapters/chapter-05.md',
    'chapters/chapter-06.md',
    'chapters/chapter-07.md',
    'chapters/chapter-08.md'
  ],
  // entryContext: './manuscripts', // default to '.' (relative to 'vivliostyle.config.js')
  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: {
  //   title: 'Table of Contents',
  //   htmlPath: 'index.html',
  //   sectionDepth: 3,
  // },
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   replace: [ // specify replace handlers to modify HTML outputs
  //     {
  //       // This handler replaces {current_time} to a current local time tag.
  //       test: /{current_time}/,
  //       match: (_, h) => {
  //         const currentTime = new Date().toLocaleString();
  //         return h('time', { datetime: currentTime }, currentTime);
  //       },
  //     },
  //   ],
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
};

module.exports = vivliostyleConfig;

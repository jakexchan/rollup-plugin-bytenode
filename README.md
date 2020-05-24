# rollup-plugin-bytenode

[Rollup](https://github.com/rollup/rollup) plugin for compile file to byte code. Use [bytenode](https://github.com/OsamaAbbas/bytenode) compiler.

## Install

```bash
npm i rollup-plugin-bytenode --save-dev
// or
yarn add rollup-plugin-bytenode --save-dev
```

## Usage

rollup.config.js

```js
const rollup = require('rollup');
const rollupPluginBytenode = require('rollup-plugin-bytenode');

rollup({
  input: 'main.js',
  output: [
    {
      file: 'dist/main.js',
      format: 'cjs'
    }
  ],
  plugins: [
    rollupPluginBytenode()
  ]
})
```

## License

Copyright (c) [jakexchan](https://github.com/jakexchan)

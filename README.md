# rollup-plugin-bytenode

[Rollup](https://github.com/rollup/rollup) plugin for compile JavaScript file to byte code. Use [bytenode](https://github.com/OsamaAbbas/bytenode) compiler.

## Install

```bash
npm i rollup-plugin-bytenode --save-dev
// or
yarn add rollup-plugin-bytenode --save-dev
```

## Usage

rollup.config.js

```js
import bytenode from 'rollup-plugin-bytenode';

export default {
  input: 'main.js',
  output: [
    {
      file: 'dist/main.js',
      format: 'cjs'
    }
  ],
  plugins: [
    bytenode()
  ]
}
```

## License

MIT License Copyright (c) [jakexchan](https://github.com/jakexchan)

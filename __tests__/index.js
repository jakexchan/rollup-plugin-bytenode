const fs = require('fs');
const path = require('path');

const { rollup } = require('rollup');
const { terser } = require('rollup-plugin-terser');
const rollupPluginBytenode = require('../');

test('Output compile file', async () => {
  const bundle = await rollup({
    input: 'examples/test-case.js',
    output: [
      {
        file: 'dist/test-case.js',
        format: 'cjs'
      }
    ],
    plugins: [
      terser(),
      rollupPluginBytenode()
    ]
  });
  await bundle.write({ file: 'dist/test-case.js', format: "cjs" });
  const compileFile = path.resolve(__dirname, '../dist/test-case.jsc');
  expect(fs.existsSync(compileFile)).toBeTruthy();
});

test('Run compile file', async (done) => {
  const { exec } = require('child_process');

  exec('node ./examples/run-compile-case.js', (err, stdout, stderr) => {
    if (!err) {
      expect(stdout.trim()).toEqual('Hello world');
      done();
    }
  });
});
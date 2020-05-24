const bytenode = require('bytenode');
const path = require('path');

function isCjs (format) {
  const upper = format.toLowerCase();
  return upper === 'cjs' || upper === 'commonjs';
}

function bytenodeService (pluginOptions = {}) {
  return {
    name: 'bytenode',
    async writeBundle (options, bundle) {
      const { file, format } = options;
      const targetFile = path.resolve(__dirname, file);
      const compileAsModule = isCjs(format);

      bytenode.compileFile({
        filename: targetFile,
        compileAsModule
      });
    }
  };
}

module.exports = bytenodeService;

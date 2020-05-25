import bytenodeCore from 'bytenode';
import { resolve } from 'path';

function isCjs (format) {
  const upper = format.toLowerCase();
  return upper === 'cjs' || upper === 'commonjs';
}

export default function bytenode (pluginOptions = {}) {
  return {
    name: 'bytenode',
    async writeBundle (options) {
      const { file, format } = options;
      const targetFile = resolve(file);

      const compileAsModule = isCjs(format);

      // only support CommonJS
      if (compileAsModule) {
        bytenodeCore.compileFile({
          filename: targetFile,
          compileAsModule
        });
      }
    }
  };
}
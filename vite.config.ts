import react from '@vitejs/plugin-react-swc';
import type { ConfigEnv } from 'vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default (args: ConfigEnv) => {
  const { mode } = args;
  const generateScopedName = mode === 'production' ? '[hash:base64:3]' : '[path][name]_[local]_[hash:base64:3]';

  return defineConfig({
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName,
      },
    },
  });
};

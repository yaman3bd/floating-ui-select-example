import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({mode}) => {
  const isDev = mode === 'dev';
  return {
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
      tsconfigPaths(),
    ],
    css: {
      modules: {
        generateScopedName: isDev ? '[local]' : '[local]_[hash:base64:5]',
      }
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/main.tsx'),
        name: 'ABJAD',
        formats: ['es', 'umd'],
        fileName: (format) => `abjad.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'styled-components'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'styled-components': 'styled',
          },
        },
      },
    },
  };
});

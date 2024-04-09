import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

// Define chrome as the default browser for the dev server
const opsys = process.platform;
// windows
if (opsys === 'win32' || opsys === 'win64') process.env.BROWSER = 'chrome';
// macOS
if (opsys === 'darwin') process.env.BROWSER = '/Applications/Google Chrome.app';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    sourcemap: true,
  },
  plugins: [
    // HTML minification
    ViteMinifyPlugin({
      removeComments: true,
    }),
  ],
});

import { resolve } from "path";
import { defineConfig } from "vite";

import { createVuePlugin } from "vite-plugin-vue2";
import ScriptSetup from "unplugin-vue2-script-setup/vite";
import Inspect from "vite-plugin-inspect";
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";
import Components from "unplugin-vue-components/vite";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";

const rollupOptions = {};

const alias = [
  { find: /^~/, replacement: "" },
  { find: "vue", replacement: "vue/dist/vue.esm" },
  {
    find: "@",
    replacement: resolve(__dirname, ""),
  },
];

const proxy = {};

const define = {
  "process.env.NODE_ENV": '"development"',
  "precess.env.SITE_NAME": '"Vite Vue2 App"',
};

const esbuild = {};

// @see https://cn.vitejs.dev/config/
export default defineConfig({
  base: "./", // index.html
  root: "./", // js
  publicDir: "static",
  resolve: {
    alias,
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".styl"],
    dedupe: ["vue-demi"],
  },
  define: define,
  server: {
    // 代理
    proxy,

    port: 3003,
    fs: {
      strict: false,
    },
  },
  build: {
    target: "es2015",
    minify: "terser",
    manifest: false,
    sourcemap: true,
    outDir: "build",
    rollupOptions,
  },
  esbuild,
  plugins: [
    createVuePlugin({
      jsx: true,
      vueTemplateOptions: {
        compilerOptions: {
          whitespace: "condense",
        },
      },
    }),
    PkgConfig(),
    OptimizationPersist(),
    Components({
      resolvers: [VuetifyResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: true,
    }),
    Inspect(),
    ScriptSetup(),

    // https://github.com/hannoeru/vite-plugin-pages
    // Pages({
    //   pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
    //   exclude: ['**/components/**.vue'],
    //   extensions: ['vue'],
    //   syncIndex: false,
    //   replaceSquareBrackets: true,
    //   nuxtStyle: true,
    // }),
    // WindiCSS(),
  ],
  css: {
    preprocessorOptions: {},
  },
});

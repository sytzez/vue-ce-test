const esbuild = require("esbuild");
const vuePlugin = require("unplugin-vue/esbuild");

esbuild.build({
  platform: "browser",
  entryPoints: ["src/index.js"],
  bundle: true,
  plugins: [
    vuePlugin({
      style: {
        preprocessLang: "scss",
      },
    }),
  ],
  outfile: "out.js",
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiBase: "https://63f2d751f28929a9df605107.mockapi.io/nttp",
    },
  },
});

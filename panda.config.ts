import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  'html, body': {
    backgroundColor: 'background',
    fontFamily: 'var(--font-poppins)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: 'text.0',
    maxW: '100vw',
  }
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./lib/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./mdx-components.tsx"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          background: {
            value: '#ffffff',
          },
          tile: {
            0: { value: '#f7f7f7' },
            1: { value: '#242424' },
          },
          green: {
            0: { value: '#e6ffee' },
            1: { value: '#d3f9e0' },
            2: { value: '#a8f2c0' },
            3: { value: '#7aea9f' },
            4: { value: '#54e382' },
            5: { value: '#3bdf70' },
            6: { value: '#2bdd66' },
            7: { value: '#1bc455' },
            8: { value: '#0bae4a' },
            9: { value: '#00973c' },
          },
          red: {
            0: { value: "#ffe8e9" },
            1: { value: "#ffd1d1" },
            2: { value: "#fba0a0" },
            3: { value: "#f76d6d" },
            4: { value: "#f44141" },
            5: { value: "#f22625" },
            6: { value: "#f21616" },
            7: { value: "#d8070b" },
            8: { value: "#c10007" },
            9: { value: "#a90003" }
          },
          text: {
            0: { value: '#050505' },
            1: { value: '#05050580' },
            2: { value: '#05050560' },
          },
          border: {
            value: '#00000020',
          },
          dimmed: {
            green: {
              0: { value: '#e6ffee20' },
              1: { value: '#d3f9e020' },
              2: { value: '#a8f2c020' },
              3: { value: '#7aea9f20' },
              4: { value: '#54e38220' },
              5: { value: '#3bdf7020' },
              6: { value: '#2bdd6620' },
              7: { value: '#1bc45520' },
              8: { value: '#0bae4a20' },
              9: { value: '#00973c20' },
            },
            red: {
              0: { value: "#ffe8e920" },
              1: { value: "#ffd1d120" },
              2: { value: "#fba0a020" },
              3: { value: "#f76d6d20" },
              4: { value: "#f4414120" },
              5: { value: "#f2262520" },
              6: { value: "#f2161620" },
              7: { value: "#d8070b20" },
              8: { value: "#c1000720" },
              9: { value: "#a9000320" }
            },
          }
        }
      },
    }
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalCss,
});
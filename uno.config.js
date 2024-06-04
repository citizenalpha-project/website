import fs from 'fs/promises'

import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetTypography
} from 'unocss'

export default defineConfig({
  content: {
    filesystem: [
      'themes/v1/**/*.html',
    ],
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
  ],
  preflights: [
    {
      getCSS: () => fs.readFile('node_modules/@unocss/reset/tailwind.css', 'utf-8'),
    },
  ]
})

import { sxzz } from '@sxzz/eslint-config'

export default sxzz([
  {
    files: ['routes/**/*.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
])

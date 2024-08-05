import typescriptEslint from 'typescript-eslint'
import eslintJs from '@eslint/js'

export default [
    eslintJs.configs.recommended,
    ...typescriptEslint.configs.recommended,
    {
        ignores: [
            'node_modules/**',
            'packages/core/build/**',
            'packages/core/**/*.d.ts',
            'packages/helpers/build/**',
            'packages/helpers/coverage/**',
            'packages/helpers/**/*.d.ts',
            'packages/icons/build/**',
            'packages/icons/**/*.d.ts',
            'packages/utils/build/**',
            'packages/utils/**/*.d.ts',
            'docs/modjs-core-site/.next/**',
        ],
    },
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-unused-vars': ['warn'],
            '@typescript-eslint/no-namespace': 'off',
            'no-console': 'warn',
            'no-duplicate-imports': 'warn',
            'no-undef': 'off', //Set to off for For docs site when using localStorage
        },
    },
]

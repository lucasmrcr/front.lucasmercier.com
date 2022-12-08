module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        sourceType: 'module',
    },
    overrides: [
        {
            files: '*.ts',
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: 'tsconfig.json',
                createDefaultProgram: true,
            },
            extends: [
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/recommended',
                'plugin:import/typescript',
                'plugin:prettier/recommended',
            ],
            rules: {
                '@typescript-eslint/unbound-method': [
                    //Allow to ignore static called methods
                    'error',
                    {
                        ignoreStatic: true,
                    },
                ],
                'import/no-unresolved': 0,
                'prettier/prettier': 'warn',
                '@angular-eslint/component-selector': [
                    'warn',
                    {
                        type: 'element',
                        prefix: 'app',
                        style: 'kebab-case',
                    },
                ],
                '@angular-eslint/directive-selector': [
                    'warn',
                    {
                        type: 'attribute',
                        prefix: 'app',
                        style: 'camelCase',
                    },
                ],
            },
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
        },
        {
            files: ['*.html'],
            excludedFiles: ['*inline-template-*.component.html'],
            extends: ['plugin:prettier/recommended'],
            rules: {
                'prettier/prettier': [
                    'warn',
                    {
                        parser: 'angular',
                    },
                ],
            },
        },
    ],
};

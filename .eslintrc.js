module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'airbnb-base',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': 'off',
        'vue/no-deprecated-slot-attribute': 'error',
        'vue/no-deprecated-slot-scope-attribute': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/no-boolean-default': 'warn',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
        ],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
            },
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'no-underscore-dangle': 'off',
        'no-shadow': ['error', { allow: ['state', 'Vue'] }],
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
        'object-shorthand': ['error', 'methods'],
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                ts: 'always',
            },
        ],
        'import/no-absolute-path': 'error',
        'import/no-relative-parent-imports': 'off',
        'import/no-unresolved': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 0,
        'no-use-before-define': [2, 'nofunc'],
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: true,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
        ],
    },
};

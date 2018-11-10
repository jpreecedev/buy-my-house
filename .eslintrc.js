const paths = require('./config/paths');

module.exports = {
    extends: [
        'wiremore',
        'wiremore/react',
        'prettier',
        'prettier/react',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:security/recommended',
    ],
    plugins: ['babel', 'import', 'prettier', 'security'],
    settings: {
        'import/resolver': {
            node: {
                paths: paths.resolveModules,
            },
        },
    },
    rules: {
        'import/named': 0,
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
        'prettier/prettier': 'error',
    },
};

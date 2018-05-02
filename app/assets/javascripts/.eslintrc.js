module.exports = {
    env: {
        browser: true
    },
    extends: [
        'airbnb-base',
        'plugin:node/recommended'
    ],
    plugins: [
        'node'
    ],
    globals: {
        '$': true,
        'google': true,
        'ga': true,
    },
    'rules': {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-alert': 0,
        'prefer-destructuring': 0,
    }
}
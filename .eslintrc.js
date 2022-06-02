module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        "standard",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint",
        "eslint-plugin-prettier"
    ],
    ignorePatterns: ['.eslintrc.js', 'dist'],
    rules: {
      'prettier/prettier': 'error'
    }
}

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'./.eslintrc-typescript.cjs',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'simple-import-sort'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^react'],
					['^@?\\\\w'],
					['@/(.*)'],
					['^~'],
					['^~/ameliance-ui'],
					['^[./]'],
					['^~assets'],
					['@.+.(sc|sa|c)ss$'],
					['.(sc|sa|c)ss$'],
					['.module.(sc|sa|c)ss$'],
				],
			},
		],
		'object-shorthand': ['error', 'always'],
	},
};

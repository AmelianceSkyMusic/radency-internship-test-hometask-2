module.exports = {
	extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime'],
	plugins: ['react', 'simple-import-sort'],
	rules: {
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
		'react/self-closing-comp': 'warn',
		'object-shorthand': ['error', 'always'],
	},
};

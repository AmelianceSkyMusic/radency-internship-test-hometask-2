module.exports = {
	rules: {
		// TypeScript Rules
		'@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
		'@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
		'@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
		'@typescript-eslint/method-signature-style': 'warn',
		'@typescript-eslint/naming-convention': [
			'warn',
			{ selector: 'interface', format: ['PascalCase'] },
			{ selector: 'enum', format: ['PascalCase'] },
			{ selector: 'typeLike', format: ['PascalCase'] },
		],
		'@typescript-eslint/no-duplicate-enum-values': 'warn',
		'@typescript-eslint/unified-signatures': 'warn',

		// Extension Rules
		'no-loop-func': 'off',
		'no-loss-of-precision': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [2],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'warn',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'warn',

		// Formatting Rules
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': 'warn',
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': 'warn',
		'@typescript-eslint/member-delimiter-style': 'warn',
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['warn', 'always'],
		semi: 'off',
		'@typescript-eslint/semi': 'warn',
		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': 'warn',
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': 'warn',
		'@typescript-eslint/type-annotation-spacing': 'warn',
	},
};

import { fixupConfigRules } from '@eslint/compat';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [...fixupConfigRules(compat.extends(
	'airbnb-base',
	'eslint:recommended',
	'plugin:import/recommended',
	'eslint-config-prettier',
)), {
	languageOptions: {
		globals: {
			...globals.browser,
		},

		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignores: ['dist/*'],
	rules: {
		indent: [2, 'tab'],
		semi: 'off',
		'no-tabs': 0,

		'object-curly-newline': ['error', {
			ObjectPattern: {
				multiline: true,
			},

			ImportDeclaration: 'never',

			ExportDeclaration: {
				multiline: true,
				minProperties: 8,
			},
		}],

		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',
		'import/no-extraneous-dependencies': 'off',
		'class-methods-use-this': 'off',
		'no-new': 'off',
		'no-restricted-syntax': ['error', 'BinaryExpression[operator=\'in\']'],

		'import/extensions': ['error', 'ignorePackages', {
			json: 'never',
			js: 'never',
		}],

		'no-return-assign': 'off',
		'no-constructor-return': 'off',
		'import/no-cycle': 'off',
		'guard-for-in': 'off',

		'max-len': ['error', {
			code: 150,
		}],
		'no-underscore-dangle': 'off',
	},
}];

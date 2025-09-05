import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:1337/graphql',
	generates: {
		'src/graphql/generated.ts': {
			documents: 'src/graphql/queries/**/*.{gql,graphql}',
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
			config: {
				apolloReactHooksImportFrom: '@apollo/client/react',
				withMutationFn: false,
				withResultType: false,
				withComponent: false,
				withHOC: false,
				scalars: {
					Date: 'string',
					DateTime: 'string',
					JSON: 'Record<string, unknown>',
				},
			},
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;

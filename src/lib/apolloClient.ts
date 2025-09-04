import { ApolloClient, HttpLink,InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL,
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
		},
	}),
	cache: new InMemoryCache(),
});

export default apolloClient;

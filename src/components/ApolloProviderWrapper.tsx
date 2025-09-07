'use client';

import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client/react';

import apolloClient from '@/lib/apolloClient';

const ApolloProviderWrapper = ({ children }: { children: ReactNode }) => (
	<ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);

export default ApolloProviderWrapper;

import { useState } from 'react';
import { DocumentNode } from '@apollo/client';
import { useLazyQuery, useQuery } from '@apollo/client/react';

interface UseTabsDataOptions<TType extends string, TData, TQuery> {
	query: DocumentNode;
	tabs: readonly TType[];
	variableKey: string;
	extract: (data: TQuery | undefined) => TData[] | undefined;
}

export function useTabsData<TType extends string, TData, TQuery>({
	query,
	tabs,
	variableKey,
	extract,
}: UseTabsDataOptions<TType, TData, TQuery>) {
	const [active, setActive] = useState<TType>(tabs[0]);

	const { data: initialData, loading: initialLoading } = useQuery<TQuery>(
		query,
		{
			variables: { filters: { [variableKey]: { eq: tabs[0].toLowerCase() } } },
			fetchPolicy: 'cache-first',
		}
	);

	const [fetchLazy, { data, loading }] = useLazyQuery<TQuery>(query, {
		fetchPolicy: 'cache-first',
	});

	const handleTabChange = (val: string) => {
		const type = val as TType;
		setActive(type);

		fetchLazy({
			variables: { filters: { [variableKey]: { eq: type.toLowerCase() } } },
		});
	};

	const list =
		active === tabs[0] ? (extract(initialData) ?? []) : (extract(data) ?? []);

	return {
		active,
		list,
		initialLoading,
		loading,
		handleTabChange,
	};
}

import { useEffect, useState } from 'react';
import { ApolloClient, DocumentNode } from '@apollo/client';

interface UseTabsDataOptions<TType extends string, TData, TQuery> {
	client: ApolloClient;
	query: DocumentNode;
	tabs: readonly TType[];
	variableKey: string;
	extract: (data: TQuery | undefined) => TData[] | undefined;
}

export function useTabsData<TType extends string, TData, TQuery>({
	client,
	query,
	tabs,
	variableKey,
	extract,
}: UseTabsDataOptions<TType, TData, TQuery>) {
	const [active, setActive] = useState<TType>(tabs[0]);
	const [list, setList] = useState<TData[]>([]);
	const [loadingInitial, setLoadingInitial] = useState(true);
	const [loadingContent, setLoadingContent] = useState(false);

	const fetchData = async (type: TType, isInitial = false) => {
		if (isInitial) setLoadingInitial(true);
		else setLoadingContent(true);

		const { data } = await client.query<TQuery>({
			query,
			variables: { filters: { [variableKey]: { eq: type.toLowerCase() } } },
		});

		setList(extract(data) ?? []);

		if (isInitial) setLoadingInitial(false);
		else setLoadingContent(false);
	};

	useEffect(() => {
		fetchData(tabs[0], true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleTabChange = (val: string) => {
		const type = val as TType;
		setActive(type);
		fetchData(type);
	};

	return {
		active,
		list,
		loadingInitial,
		loadingContent,
		handleTabChange,
	};
}

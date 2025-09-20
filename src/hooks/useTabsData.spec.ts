/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLazyQuery, useQuery } from '@apollo/client/react';
import { act, renderHook } from '@testing-library/react';

import { useTabsData } from './useTabsData';

jest.mock('@apollo/client/react', () => ({
	useQuery: jest.fn(),
	useLazyQuery: jest.fn(),
}));

const TABS = ['Tab-1', 'Tab-2'] as const;
const QUERY = {} as any;

type TType = (typeof TABS)[number];
type TData = { id: number; name: string };
type TQuery = { items: TData[] };

const extract = (data?: TQuery) => data?.items;

describe('useTabsData', () => {
	it('returns initial data for the first tab', () => {
		(useQuery as unknown as jest.Mock).mockReturnValue({
			data: { items: [{ id: 1, name: 'First item' }] },
			loading: false,
		});
		(useLazyQuery as unknown as jest.Mock).mockReturnValue([
			jest.fn(),
			{ data: undefined, loading: false },
		]);

		const { result } = renderHook(() =>
			useTabsData<TType, TData, TQuery>({
				query: QUERY,
				tabs: TABS,
				variableKey: 'type',
				extract,
			})
		);

		expect(result.current.active).toBe('Tab-1');
		expect(result.current.list).toEqual([{ id: 1, name: 'First item' }]);
		expect(result.current.initialLoading).toBe(false);
		expect(result.current.loading).toBe(false);
	});

	it('fetches and returns data for other tabs', () => {
		const fetchLazy = jest.fn();

		(useQuery as unknown as jest.Mock).mockReturnValue({
			data: { items: [{ id: 1, name: 'First item' }] },
			loading: false,
		});
		(useLazyQuery as unknown as jest.Mock).mockReturnValue([
			fetchLazy,
			{ data: { items: [{ id: 2, name: 'Second item' }] }, loading: true },
		]);

		const { result } = renderHook(() =>
			useTabsData<TType, TData, TQuery>({
				query: QUERY,
				tabs: TABS,
				variableKey: 'type',
				extract,
			})
		);

		act(() => {
			result.current.handleTabChange('Tab-2');
		});

		expect(fetchLazy).toHaveBeenCalledWith({
			variables: { filters: { type: { eq: 'tab-2' } } },
		});
		expect(result.current.active).toBe('Tab-2');
		expect(result.current.list).toEqual([{ id: 2, name: 'Second item' }]);
		expect(result.current.loading).toBe(true);
	});

	it('returns empty list if extract returns undefined', () => {
		(useQuery as unknown as jest.Mock).mockReturnValue({
			data: undefined,
			loading: false,
		});
		(useLazyQuery as unknown as jest.Mock).mockReturnValue([
			jest.fn(),
			{ data: undefined, loading: false },
		]);

		const { result } = renderHook(() =>
			useTabsData<TType, TData, TQuery>({
				query: QUERY,
				tabs: TABS,
				variableKey: 'type',
				extract,
			})
		);

		expect(result.current.list).toEqual([]);
	});

	it('sets active tab correctly', () => {
		(useQuery as unknown as jest.Mock).mockReturnValue({
			data: { items: [{ id: 1, name: 'First item' }] },
			loading: false,
		});
		(useLazyQuery as unknown as jest.Mock).mockReturnValue([
			jest.fn(),
			{ data: undefined, loading: false },
		]);

		const { result } = renderHook(() =>
			useTabsData<TType, TData, TQuery>({
				query: QUERY,
				tabs: TABS,
				variableKey: 'type',
				extract,
			})
		);

		act(() => {
			result.current.handleTabChange('Tab-2');
		});

		expect(result.current.active).toBe('Tab-2');
	});
});

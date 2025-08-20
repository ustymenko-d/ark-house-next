import { act, renderHook } from '@testing-library/react';

import { useBreakpoints } from './useBreakpoints';

jest.mock('lodash.debounce');

export const expectBreakpoint = (width: number, expected: number) => {
	resizeWindow(width);
	const { result } = renderHook(() => useBreakpoints([768]));
	expect(result.current).toBe(expected);
};

describe('useBreakpoints', () => {
	it('return initial index based on window width', () => {
		expectBreakpoint(800, 1);
	});

	it('update index on window resize', () => {
		resizeWindow(400);
		const { result } = renderHook(() => useBreakpoints([500, 1000]));

		expect(result.current).toBe(0);

		act(() => {
			resizeWindow(1100);
		});

		expect(result.current).toBe(2);
	});
});

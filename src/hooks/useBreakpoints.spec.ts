import { act, renderHook } from '@testing-library/react';

import { useBreakpoints } from './useBreakpoints';

jest.mock('lodash.debounce');

const resizeWindow = (width: number) => {
	Object.defineProperty(window, 'innerWidth', {
		writable: true,
		configurable: true,
		value: width,
	});

	window.dispatchEvent(new Event('resize'));
};

describe('useBreakpoints', () => {
	it('return initial index based on window width', () => {
		resizeWindow(800);
		const { result } = renderHook(() => useBreakpoints([500, 1000]));
		expect(result.current).toBe(1);
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

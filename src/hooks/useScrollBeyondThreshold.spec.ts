import { act, renderHook } from '@testing-library/react';

import useScrollBeyondThreshold from './useScrollBeyondThreshold';

jest.mock('lodash.debounce');

describe('useScrollBeyondThreshold', () => {
	it('returns false when scrollY < threshold', () => {
		const { result } = renderHook(() => useScrollBeyondThreshold(50));
		expect(result.current).toBe(false);
	});

	it('returns true when scrollY > threshold', () => {
		const { result } = renderHook(() => useScrollBeyondThreshold(50));

		act(() => {
			setScrollY(window.innerHeight);
			window.dispatchEvent(new Event('scroll'));
		});

		expect(result.current).toBe(true);
	});

	it('returns false again when scrollY drops below the threshold', () => {
		const { result } = renderHook(() => useScrollBeyondThreshold(50));

		act(() => {
			setScrollY(window.innerHeight);
			window.dispatchEvent(new Event('scroll'));
		});
		expect(result.current).toBe(true);

		act(() => {
			setScrollY(0);
			window.dispatchEvent(new Event('scroll'));
		});
		expect(result.current).toBe(false);
	});

	it('cleans up scroll event listeners on unmount', () => {
		const addSpy = jest.spyOn(window, 'addEventListener');
		const removeSpy = jest.spyOn(window, 'removeEventListener');

		const { unmount } = renderHook(() => useScrollBeyondThreshold(50));

		expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function), {
			passive: true,
		});

		unmount();

		expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
	});
});

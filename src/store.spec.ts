import { act } from '@testing-library/react';

import { useAppStore } from './store';

describe('useAppStore', () => {
	it('have valid initial state', () => {
		const store = useAppStore.getState();
		expect(store.headerNavVisible).toBe(false);
		expect(store.modalOpen).toBe(false);
	});

	it('toggle headerNavVisible', () => {
		act(() => useAppStore.getState().toggleHeaderNav());
		expect(useAppStore.getState().headerNavVisible).toBe(true);

		act(() => useAppStore.getState().toggleHeaderNav());
		expect(useAppStore.getState().headerNavVisible).toBe(false);
	});

	it('toggle modalOpen', () => {
		act(() => useAppStore.getState().toggleModalOpen());
		expect(useAppStore.getState().modalOpen).toBe(true);

		act(() => useAppStore.getState().toggleModalOpen());
		expect(useAppStore.getState().modalOpen).toBe(false);
	});
});

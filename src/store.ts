import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IAppState {
	headerNavVisible: boolean;
	toggleHeaderNav: () => void;

	modalOpen: boolean;
	toggleModalOpen: () => void;
}

export const useAppStore = create<IAppState>()(
	devtools(
		(set) => ({
			headerNavVisible: false,
			toggleHeaderNav: () =>
				set((state) => ({ headerNavVisible: !state.headerNavVisible })),

			modalOpen: false,
			toggleModalOpen: () => set((state) => ({ modalOpen: !state.modalOpen })),
		}),
		{ name: 'AppStore' }
	)
);

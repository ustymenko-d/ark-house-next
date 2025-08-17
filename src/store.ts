import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IAppState {
	headerNavVisible: boolean;
	toggleHeaderNav: () => void;

	modalOpen: boolean;
	toggleModalOpen: () => void;
}

const appStoreCreator: StateCreator<IAppState> = (set) => ({
	headerNavVisible: false,
	toggleHeaderNav: () =>
		set((state) => ({ headerNavVisible: !state.headerNavVisible })),

	modalOpen: false,
	toggleModalOpen: () => set((state) => ({ modalOpen: !state.modalOpen })),
});

export const useAppStore = create<IAppState>()(
	devtools(appStoreCreator, { name: 'AppStore' })
);

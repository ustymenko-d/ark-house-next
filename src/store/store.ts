import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AppState {
	webpSupport: null | boolean
	setWebpSupport: (supported: boolean) => void

	headerNavVisible: boolean
	toggleHeaderNav: () => void

	modalOpen: boolean
	toggleModalOpen: () => void

	projectModalOpen: boolean
	toggleProjectModalOpen: () => void
}

export const useAppStore = create<AppState>()(
	devtools(
		(set) => ({
			webpSupport: null,
			setWebpSupport: (supported: boolean) =>
				set(() => ({ webpSupport: supported })),

			headerNavVisible: false,
			toggleHeaderNav: () =>
				set((state) => ({ headerNavVisible: !state.headerNavVisible })),

			modalOpen: false,
			toggleModalOpen: () => set((state) => ({ modalOpen: !state.modalOpen })),

			projectModalOpen: false,
			toggleProjectModalOpen: () =>
				set((state) => ({ projectModalOpen: !state.projectModalOpen })),
		}),
		{ name: 'AppStore' }
	)
)

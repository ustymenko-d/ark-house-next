import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AppState {
	headerNavVisible: boolean
	toggleHeaderNav: () => void
}

export const useAppStore = create<AppState>()(
	devtools((set) => ({
		headerNavVisible: false,
		toggleHeaderNav: () =>
			set((state) => ({
				headerNavVisible: !state.headerNavVisible,
			})),
	}))
)

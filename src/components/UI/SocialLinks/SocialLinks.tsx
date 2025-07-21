'use client'

import clsx from 'clsx'

import { useAppStore } from '@/store'

import styles from './SocialLinks.module.css'

const SOCIAL = ['Instagram', 'Twitter', 'Linkedin'] as const

const SocialLinks = () => {
	const toggleModalOpen = useAppStore(s => s.toggleModalOpen)

	return (
		<ul className='flex gap-8 lg:justify-end'>
			{SOCIAL.map((item, index) => (
				<li key={`${item}-${index}`}>
					<button
						onClick={toggleModalOpen}
						aria-label={item}
						className={clsx(
							'inline-block w-6 h-6 p-1 outline-neutral-950 bg-no-repeat bg-center transition-[outline-offset] duration-150',
							'focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-4',
							'hover:outline-2 hover:outline hover:outline-offset-4',
							'active:outline-2 active:outline activeoutline-offset-4',
							styles[`SocialLinks-icon_${item}`]
						)}></button>
				</li>
			))}
		</ul>
	)
}

export default SocialLinks

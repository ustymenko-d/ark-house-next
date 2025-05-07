'use client'

import clsx from 'clsx'
import { useAppStore } from '@/store/store'
import styles from './SocialLinks.module.css'

const SOCIAL: string[] = ['Instagram', 'Twitter', 'Linkedin']

const BASIC_CLASSES: string =
	'inline-block w-6 h-6 p-1 transition-all focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-1 focus-visible:outline-neutral-950 hover:outline hover:outline-offset-4 hover:outline-1 hover:outline-neutral-950 active:outline active:outline-offset-4 active:outline-1 active:outline-neutral-950 bg-no-repeat bg-center'

const SocialLinks = () => {
	const toggleModalOpen = useAppStore((state) => state.toggleModalOpen)

	return (
		<ul className='flex gap-8 lg:justify-end'>
			{SOCIAL.map((item, index) => (
				<li key={`${item}-${index}`}>
					<button
						onClick={toggleModalOpen}
						aria-label={item}
						className={clsx(
							BASIC_CLASSES,
							styles[`SocialLinks-icon_${item}`]
						)}></button>
				</li>
			))}
		</ul>
	)
}

export default SocialLinks

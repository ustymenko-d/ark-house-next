import clsx from 'clsx'

import Tabs from '@/components/Tabs/Tabs'
import Button from '@/components/UI/Button'
import { TEAM_TABS } from '@/const/const'

const TeamSection = () => (
	<section
		id='team'
		className='px-4 mb-14'>
		<div className='container mx-auto topline mb-14 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Our team</h2>
			<Button to='/contact'>Discover&nbsp;All</Button>
		</div>

		<div
			className={clsx(
				'relative w-full bg-neutral-100',
				'before:content-[""] before:block before:absolute before:top-0 before:h-full before:pointer-events-none before:w-[calc(100vw-100%)] before:bg-[rgba(245,245,245)] before:-translate-x-full',
				'after:content-[""] after:block after:absolute after:top-0 after:right-0 after:h-full after:pointer-events-none after:w-[calc(100vw-100%)] after:bg-[rgba(245,245,245)] after:translate-x-full'
			)}>
			<div className='container py-12 mx-auto mb-14 md:px-10 lg:px-20'>
				<p className='mb-8 text-base text-gray-800 md:text-lg xl:max-w-5xl'>
					Our team of expert architects and builders, with over 45 years of combined experience,
					will bring your vision to life. Trust us to deliver functional and beautiful structures
					that exceed expectations.
				</p>

				<Tabs
					tabsList={TEAM_TABS}
					tabsType='team'
				/>
			</div>
		</div>
	</section>
)

export default TeamSection

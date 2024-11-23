import React from 'react'
import Button from '@/components/UI/Button/Button'
import Tabs from '@/components/Tabs/Tabs'
import { TEAM_TABS } from '@/const/const'
import styles from './TeamSection.module.css'

const TeamSection: React.FC = () => {
	return (
		<section
			id='team'
			className='mb-14 px-4'>
			<div className='topline mb-14 mx-auto container md:px-10 lg:px-20'>
				<h2 className='leading-tight font-semibold'>Our team</h2>
				<Button linkHref='/contact'>Discover&nbsp;All</Button>
			</div>

			<div className={`${styles.teamWrapper} relative w-full bg-neutral-100`}>
				<div className='container mb-14 mx-auto py-12 md:px-10 lg:px-20'>
					<p className='text-2xl mb-10 xl:max-w-5xl'>
						Our team of expert architects and builders, with over 45 years of
						combined experience, will bring your vision to life. Trust us to
						deliver functional and beautiful structures that exceed
						expectations.
					</p>

					<Tabs
						tabsList={TEAM_TABS}
						tabsType='team'
					/>
				</div>
			</div>
		</section>
	)
}

export default TeamSection

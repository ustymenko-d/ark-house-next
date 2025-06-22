import Button from '@/components/UI/Button/Button'
import Tabs from '@/components/Tabs/Tabs'
import { TEAM_TABS } from '@/const/const'
import styles from './TeamSection.module.css'

const TeamSection = () => (
	<section
		id='team'
		className='px-4 mb-14'>
		<div className='container mx-auto topline mb-14 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Our team</h2>
			<Button to='/contact'>Discover&nbsp;All</Button>
		</div>

		<div className={`${styles.teamWrapper} relative w-full bg-neutral-100`}>
			<div className='container py-12 mx-auto mb-14 md:px-10 lg:px-20'>
				<p className='mb-10 text-2xl xl:max-w-5xl'>
					Our team of expert architects and builders, with over 45 years of
					combined experience, will bring your vision to life. Trust us to
					deliver functional and beautiful structures that exceed expectations.
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

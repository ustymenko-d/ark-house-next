import Banner from '@/components/Banner'
import Tabs from '@/components/Tabs/Tabs'
import Button from '@/components/UI/Button/Button'
import { SERVICES_TABS } from '@/const/const'

import BannerNumber from './components/BannerNumber'
import styles from './ServicesSection.module.css'

const ServicesSection = () => (
	<section
		id='services'
		className='px-4 mb-14'>
		<div className='container mx-auto topline mb-14 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Services</h2>
			<Button to='/projects'>Discover&nbsp;All</Button>
		</div>

		<div
			className={`${styles.wrapper} grid gap-8 mx-auto container md:px-10 lg:px-20`}>
			<Banner
				className='mx-auto'
				svgImage={<BannerNumber />}
				topLineText='Offices around'
				bottomLineText='the world'
			/>
			<Tabs
				tabsType='services'
				tabsList={SERVICES_TABS}
			/>
			<div className={`${styles.description} xl:ml-auto`}>
				<p className='mb-4 text-xl'>
					At the heart of everything we do is the human experience to feel.
					To&nbsp;love. To&nbsp;image. To&nbsp;wonder. To&nbsp;guide.
					To&nbsp;jest. To&nbsp;rule. To&nbsp;serve. To&nbsp;belong.
				</p>
				<Button to='/contact'>Contact&nbsp;Us</Button>
			</div>
		</div>
	</section>
)

export default ServicesSection

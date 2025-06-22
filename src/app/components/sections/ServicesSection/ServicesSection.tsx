import Button from '@/components/UI/Button/Button'
import Banner from '@/components/Banner'
import Tabs from '@/components/Tabs/Tabs'
import { SERVICES_TABS } from '@/const/const'
import styles from './ServicesSection.module.css'

const bannerNumber = (
	<svg
		className='banner__number'
		width='240'
		height='326'
		viewBox='0 0 240 326'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M79.6105 183.46V135.256H117.276C131.971 135.256 143.812 131.328 152.801 123.473C161.932 115.618 166.497 105.406 166.497 92.8369C166.497 80.411 162.003 70.556 153.015 63.2719C144.169 55.845 132.185 52.1315 117.062 52.1315C102.081 52.1315 89.9541 56.0592 80.6805 63.9146C71.4069 71.7701 66.3421 82.4106 65.486 95.8362H5.77818C6.91955 66.5569 17.6199 43.3477 37.8792 26.2086C58.1385 9.06955 85.1033 0.5 118.774 0.5C150.447 0.5 176.484 8.35542 196.886 24.0662C217.431 39.6343 227.703 59.5585 227.703 83.8388C227.703 101.692 222.496 117.046 212.081 129.9C201.808 142.754 188.041 150.967 170.777 154.538V158.394C192.035 160.822 208.799 168.677 221.069 181.96C233.481 195.1 239.688 211.811 239.688 232.092C239.688 249.945 234.48 266.013 224.065 280.296C213.793 294.435 199.383 305.504 180.836 313.503C162.288 321.501 141.458 325.5 118.346 325.5C83.962 325.5 55.9984 316.716 34.4551 299.149C12.9117 281.581 1.42671 258.229 0 229.093H61.8479C62.8466 242.233 68.4821 252.659 78.7545 260.371C89.0268 267.941 102.438 271.726 118.988 271.726C135.11 271.726 148.235 267.584 158.365 259.3C168.637 251.016 173.773 240.304 173.773 227.164C173.773 213.596 168.78 202.956 158.793 195.243C148.806 187.388 135.181 183.46 117.918 183.46H79.6105Z'
			fill='black'
		/>
	</svg>
)

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
				svgImage={bannerNumber}
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

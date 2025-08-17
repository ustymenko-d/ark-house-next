import { Banner3 } from '@/assets/banner-icons';
import Banner from '@/components/Banner';
import Tabs from '@/components/Tabs/Tabs';
import Button from '@/components/UI/Button';
import { SERVICES_TABS } from '@/const/const';

const ServicesSection = () => (
	<section id='services' className='mb-14 px-4'>
		<div className='topline container mx-auto mb-14 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Services</h2>
			<Button to='/projects'>Discover&nbsp;All</Button>
		</div>

		<div className='container mx-auto grid grid-rows-[1fr_1.5fr_auto] gap-8 md:px-10 lg:grid-cols-[30%_1fr] lg:grid-rows-[minmax(640px,auto)_auto] lg:px-20 xl:grid-cols-[40%_1fr] xl:gap-x-12 xl:gap-y-6'>
			<Banner
				className='mx-auto'
				svgImage={<Banner3 />}
				topLineText='Offices around'
				bottomLineText='the world'
			/>
			<Tabs tabsType='services' tabsList={SERVICES_TABS} />
			<div className='lg:col-start-2 lg:row-start-2 xl:ml-auto xl:max-w-[66.66%]'>
				<p className='mb-4 text-balance text-base text-gray-800 md:text-lg'>
					At the heart of everything we do is the human experience to feel.
					To&nbsp;love. To&nbsp;image. To&nbsp;wonder. To&nbsp;guide.
					To&nbsp;jest. To&nbsp;rule. To&nbsp;serve. To&nbsp;belong.
				</p>
				<Button to='/contact'>Contact&nbsp;Us</Button>
			</div>
		</div>
	</section>
);

export default ServicesSection;

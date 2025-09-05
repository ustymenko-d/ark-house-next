import { Banner3 } from '@/assets/banner-icons';
import Banner from '@/components/Banner';
import Button from '@/components/UI/Button';

import ServicesTabs from './components/ServicesTabs';

const ServicesSection = () => (
	<section id='services' className='mb-14 px-4'>
		<div className='topline container mx-auto mb-14 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Services</h2>
			<Button to='/projects'>Discover&nbsp;All</Button>
		</div>

		<div className='container mx-auto grid gap-10 md:px-10 lg:grid-cols-3 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-6 lg:px-20'>
			<Banner
				className='mx-auto max-lg:hidden'
				svgImage={<Banner3 />}
				topLineText='Offices around'
				bottomLineText='the world'
			/>

			<ServicesTabs className='lg:col-span-2' />

			<div className='flex flex-col items-start gap-4 lg:col-start-2 lg:row-start-2 lg:max-2xl:-col-end-1 xl:max-2xl:max-w-[66.66%]'>
				<p className='text-balance text-base text-gray-800 md:text-lg'>
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

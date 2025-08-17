import { Fragment } from 'react';

import { ADDRESSES, PROJECT_DESCRIPTION } from '@/const/const';

import NavigationList from './Navigation/components/NavigationList/NavigationList';
import Button from './UI/Button';
import SocialLinks from './UI/SocialLinks/SocialLinks';

const Footer = () => (
	<footer className='px-4'>
		<div className='container mx-auto'>
			<div className='topline mb-8'>
				<h2 className='font-semibold'>Start a Project?</h2>
				<Button to='/contact'>Contact&nbsp;us</Button>
			</div>

			<div className='mb-8 grid gap-x-6 gap-y-8 border-b border-b-dark-color pb-8 sm:gap-8 md:px-10 lg:grid-cols-5 lg:gap-14 lg:px-20 lg:pb-10 lg:text-4xl'>
				<div className='lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:flex lg:flex-col lg:items-start lg:gap-6'>
					<h3 className='text-xl font-semibold sm:text-3xl'>
						Support is available 24&nbsp;hours
					</h3>
					<Button className='max-lg:hidden' to='/contact'>
						Contact&nbsp;us
					</Button>
				</div>

				<div className='flex flex-wrap gap-x-8 gap-y-8 text-dark-color sm:gap-x-20 md:flex-row md:gap-x-16 md:gap-y-5 lg:col-start-3 lg:-col-end-1 lg:row-start-1 lg:row-end-2 lg:justify-end lg:gap-x-16'>
					{ADDRESSES.map(({ title, lines, phone, href }) => (
						<address
							key={title}
							className='flex flex-col items-start gap-y-3 text-lg not-italic lg:justify-start'>
							<p className='text-base text-gray-800 md:text-lg'>
								<b>{title}</b>
								<br />
								{lines.map((line, idx) => (
									<Fragment key={idx}>
										{line}
										<br />
									</Fragment>
								))}
							</p>
							<a
								className='animatedUnderline text-base text-dark-color md:text-lg'
								href={href}>
								{phone}
							</a>
						</address>
					))}
				</div>

				<div className='lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3'>
					<NavigationList className='relative left-0 top-0 flex min-h-fit flex-row flex-wrap items-center justify-start gap-8 px-0 py-5 text-xl transition-none' />
				</div>

				<div className='lg:col-start-4 lg:-col-end-1 lg:row-start-2 lg:row-end-3 lg:self-center'>
					<SocialLinks />
				</div>
			</div>

			<div className='mb-14 flex flex-col items-start gap-6 leading-5 md:px-10 lg:px-20'>
				<p className='text-base text-gray-800 md:text-lg'>
					{PROJECT_DESCRIPTION}
				</p>
				<Button to='https://ustymenko.vercel.app'>
					Back&nbsp;to&nbsp;portfolio
				</Button>
			</div>
		</div>
	</footer>
);

export default Footer;

import { Fragment } from 'react'

import { ADDRESSES, PROJECT_DESCRIPTION } from '@/const/const'

import NavigationList from './Navigation/components/NavigationList/NavigationList'
import Button from './UI/Button'
import SocialLinks from './UI/SocialLinks/SocialLinks'

const Footer = () => (
	<footer className='px-4'>
		<div className='container mx-auto'>
			<div className='mb-12 topline'>
				<h2 className='font-semibold'>Start a Project?</h2>
				<Button to='/contact'>Contact&nbsp;us</Button>
			</div>

			<div className='grid gap-6 pb-6 mb-12 border-b border-b-dark-color md:px-10 lg:px-20 lg:pb-12 lg:grid-cols-5 lg:gap-14 lg:text-4xl'>
				<div className='lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2'>
					<h3 className='mb-4 text-xl font-semibold md:text-3xl'>
						Support is available 24&nbsp;hours
					</h3>
					<Button to='/contact'>Contact&nbsp;us</Button>
				</div>

				<div className='flex flex-wrap lg:col-start-3 lg:-col-end-1 lg:row-start-1 lg:row-end-2 gap-x-8 sm:gap-x-20 gap-y-8 text-dark-color md:flex-row md:gap-x-16 md:gap-y-5 lg:justify-end lg:gap-x-16'>
					{ADDRESSES.map(({ title, lines, phone, href }) => (
						<address
							key={title}
							className='flex flex-col items-start text-lg not-italic gap-y-3 lg:justify-start'>
							<p className='lg:leading-7'>
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
								className='animatedUnderline text-dark-color'
								href={href}>
								{phone}
							</a>
						</address>
					))}
				</div>

				<div className='lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3'>
					<NavigationList className='relative top-0 left-0 flex flex-row flex-wrap items-center justify-start gap-8 px-0 py-5 text-xl transition-none min-h-fit' />
				</div>

				<div className='lg:col-start-4 lg:-col-end-1 lg:row-start-2 lg:row-end-3 lg:self-center'>
					<SocialLinks />
				</div>
			</div>

			<div className='mb-12 leading-5 md:px-10 lg:px-20'>
				<p className='pb-5'>{PROJECT_DESCRIPTION}</p>
				<Button to='https://ustymenko.vercel.app'>Back&nbsp;to&nbsp;portfolio</Button>
			</div>
		</div>
	</footer>
)

export default Footer

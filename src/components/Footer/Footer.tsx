import { Fragment } from 'react'
import clsx from 'clsx'
import Button from '../UI/Button/Button'
import SocialLinks from '../UI/SocialLinks/SocialLinks'
import NavigationList from '../Navigation/components/NavigationList/NavigationList'
import { PROJECT_DESCRIPTION } from '@/const/const'
import styles from './Footer.module.css'

const Footer = () => {
	const navListClasses = clsx(
		'relative min-h-fit left-0 top-0 py-5 px-0',
		'flex flex-row flex-wrap justify-start items-center gap-8',
		'transition-none text-xl'
	)

	const addressData = [
		{
			title: 'North',
			lines: [
				'AFL Architects',
				'St Georges House 56',
				'Peter Street',
				'Manchester',
			],
			phone: '+44 (0)161 236 6263',
			href: 'tel:+4401612366263',
		},
		{
			title: 'Midlands',
			lines: ['AFL Architects', 'Unit 12 133', 'Newhall Street', 'Birmingham'],
			phone: '+44 (0)121 289 4363',
			href: 'tel:+4401212894363',
		},
	]

	return (
		<footer className='px-4'>
			<div className='container mx-auto'>
				<div className='mb-12 topline'>
					<h2 className='font-semibold'>Start a Project?</h2>
					<Button linkHref='/contact'>Contact&nbsp;us</Button>
				</div>

				<div
					className={clsx(
						styles.contact,
						'mb-12 pb-6 border-b border-b-dark-color grid gap-6',
						'md:px-10 lg:px-20 lg:pb-12 lg:grid-cols-5 lg:gap-14 lg:text-4xl'
					)}>
					<div className='lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2'>
						<h3 className='mb-4 text-xl font-semibold md:text-3xl'>
							Support is available 24&nbsp;hours
						</h3>
						<Button linkHref='/contact'>Contact&nbsp;us</Button>
					</div>

					<div className='flex flex-wrap lg:col-start-3 lg:-col-end-1 lg:row-start-1 lg:row-end-2 gap-x-24 gap-y-8 text-dark-color md:flex-row md:gap-x-16 md:gap-y-5 lg:justify-end lg:gap-x-16'>
						{addressData.map(({ title, lines, phone, href }) => (
							<address
								key={title}
								className='flex flex-col items-start h-full text-lg not-italic gap-y-3 lg:justify-start'>
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
						<NavigationList className={navListClasses} />
					</div>

					<div className='lg:col-start-4 lg:-col-end-1 lg:row-start-2 lg:row-end-3 lg:self-center'>
						<SocialLinks />
					</div>
				</div>

				<div className='mb-12 leading-5 md:px-10 lg:px-20'>
					<p className='pb-5'>{PROJECT_DESCRIPTION}</p>
					<Button linkHref='https://ustymenko.vercel.app'>
						Back&nbsp;to&nbsp;portfolio
					</Button>
				</div>
			</div>
		</footer>
	)
}

export default Footer

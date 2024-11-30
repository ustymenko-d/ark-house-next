import React from 'react'
import { PROJECT_DESCRIPTION } from '@/const/const'
import Button from '../UI/Button/Button'
import SocialLinks from '../UI/SocialLinks/SocialLinks'
import NavigationList from '../Navigation/components/NavigationList/NavigationList'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
	const BASIC_NAV_LIST_CLASSES: string = `relative min-h-fit left-0 top-0 py-5 px-0 flex flex-row flex-wrap justify-start items-center gap-8 transition-none text-xl`

	return (
		<footer className='px-4'>
			<div className='container mx-auto'>
				<div className='topline mb-12'>
					<h2 className={`${styles.title} font-semibold`}>Start a Project?</h2>
					<Button linkHref='/contact'>Contact&nbsp;us</Button>
				</div>

				<div
					className={`${styles.contact} mb-12 pb-6 border-b border-b-dark-color grid gap-6 md:px-10 lg:px-20 lg:pb-12 lg:gap-14`}>
					<div className={styles.support}>
						<h3 className={`${styles.heading} mb-4 font-semibold`}>
							Support is available 24&nbsp;hours
						</h3>
						<Button linkHref='/contact'>Contact&nbsp;us</Button>
					</div>

					<div
						className={`${styles.addresses} flex flex-wrap gap-x-24 gap-y-8 text-dark-color md:flex-row md:gap-x-16 md:gap-y-5 lg:justify-end lg:gap-x-16`}>
						<div>
							<address className={`${styles.address} h-full flex flex-col gap-y-3 items-start not-italic lg:justify-start`}>
								<p className='lg:leading-7'>
									<b>North</b>
									<br />
									AFL&nbsp;Architects
									<br />
									St&nbsp;Georges&nbsp;House&nbsp;56
									<br />
									Peter&nbsp;Street
									<br />
									Manchester
								</p>
								<a
									className='animatedUnderline text-dark-color'
									href='tel:+4401612366263'>
									+44&nbsp;(0)161&nbsp;236&nbsp;6263
								</a>
							</address>
						</div>
						<div>
							<address className={`${styles.address} h-full flex flex-col gap-y-3 items-start not-italic lg:justify-start`}>
								<p className='lg:leading-7'>
									<b>Midlands</b>
									<br />
									AFL&nbsp;Architects
									<br />
									Unit&nbsp;12&nbsp;133
									<br />
									Newhall&nbsp;Street
									<br />
									Birmingham
								</p>
								<a
									className='animatedUnderline text-dark-color'
									href='tel:+4401212894363'>
									+44&nbsp;(0)121&nbsp;289&nbsp;4363
								</a>
							</address>
						</div>
					</div>

					<div className={styles.navigation}>
						<NavigationList basicClasses={BASIC_NAV_LIST_CLASSES} />
					</div>

					<div className={`${styles.social} lg:self-center`}>
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

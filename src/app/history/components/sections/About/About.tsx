import Button from '@/components/UI/Button/Button'
import styles from './About.module.css'
import Image from 'next/image'

const About: React.FC = () => {
	return (
		<section className={`${styles.about} mb-16 xl:grid xl:gap-x-6`}>
			<h2 className='mb-4 text-5xl tracking-tight font-semibold leading-normal xl:col-span-2'>
				Who we are
			</h2>

			<picture>
				<source
					srcSet='/img/history-page/meet@mob.webp'
					media='(max-width: 1440px)'
					type='image/webp'
				/>
				<source
					srcSet='/img/history-page/meet@mob.jpg'
					media='(max-width: 1440px)'
				/>
				<source
					srcSet='
              /img/history-page/meet@X1.webp 1x,
              /img/history-page/meet@X2.webp 2x
            '
					type='image/webp'
				/>
				<Image
					className='w-full h-full mb-4 bg-dark-color xl:mb-0'
					src='/img/history-page/meet.jpg'
					alt='Meet'
					sizes='(max-width: 1440px) 100vw, 50vw'
					quality={100}
					width={2048}
					height={1366}
				/>
			</picture>

			<div className='text-xl'>
				<p className='mb-6'>
					We are dedicated individuals from a range of different countries.
					Based in Oslo, with offices in Copenhagen, London and Reykjavik, we
					are actively involved in projects in various countries across Europe,
					Africa, the Middle East and Asia.
				</p>
				<p className='mb-6'>
					Together, we are a community with a culture for beautiful and
					outstanding architecture, a culture that is Powered by Commitment.
				</p>
				<p className={`${styles.question} mb-4 text-4xl leading-tight tracking-tight font-semibold`}>
					Do you want to work with us?
				</p>
				<Button linkHref='/contact'>Our&nbsp;Vacancies</Button>
			</div>
		</section>
	)
}

export default About

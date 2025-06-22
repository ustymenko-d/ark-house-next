import Button from '@/components/UI/Button/Button'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import { ONE_PROJECT } from '@/const/const'
import styles from './Gallery.module.css'
import clsx from 'clsx'

const Gallery = () => (
	<section className='mb-14 md:mb-20'>
		<div className='container px-4 mx-auto md:px-10 lg:px-20 topline mb-14'>
			<h2 className='font-semibold leading-tight'>Gallery</h2>
			<Button to='/contact'>Contact&nbsp;Us</Button>
		</div>

		<div
			className={clsx(
				styles.grid,
				'container mx-auto px-4 md:px-10 lg:px-20 grid md:grid-cols-12 gap-x-4 gap-y-7 xl:grid-rows-3 xl:gap-8 md:grid-rows-[1fr_0.7fr_0.25fr_1fr]'
			)}>
			{ONE_PROJECT.map((oneProject, index) => (
				<div
					key={`oneProject-${index}`}
					className={clsx(styles.button, 'duration-200')}>
					<AnimatedWrapper additionalClasses='h-full'>
						<ProjectCard projectCase={oneProject} />
					</AnimatedWrapper>
				</div>
			))}
		</div>
	</section>
)

export default Gallery

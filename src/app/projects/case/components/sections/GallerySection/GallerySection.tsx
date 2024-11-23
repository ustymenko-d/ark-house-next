import React from 'react'
import Button from '@/components/UI/Button/Button'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { ONE_PROJECT } from '@/const/const'
import styles from './GallerySection.module.css'
import ModalButton from '@/components/ModalButton/ModalButton'

const GallerySection: React.FC = () => {
	return (
		<section className='mb-14 md:mb-20'>
			<div className='topline mb-14 mx-auto container md:px-10 lg:px-20'>
				<h2 className='leading-tight font-semibold'>Gallery</h2>
				<Button linkHref='/contact'>Contact&nbsp;Us</Button>
			</div>

			<div
				className={`${styles.grid} container mx-auto px-4 md:px-10 lg:px-20 grid md:grid-cols-12 gap-x-4 gap-y-7 xl:grid-rows-3 xl:gap-8`}>
				{ONE_PROJECT.map((oneProject, index) => (
					<ModalButton
						key={`oneProject-${index}`}
						classNames={styles.button}>
						<ProjectCard projectCase={oneProject} />
					</ModalButton>
				))}
			</div>
		</section>
	)
}

export default GallerySection

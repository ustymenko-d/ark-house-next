'use client'

// import { useState } from 'react'
import { ONE_PROJECT } from '@/const/const'
import Button from '@/components/UI/Button/Button'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import styles from './GallerySection.module.css'
// import ProjectModal from '@/components/ProjectModal/ProjectModal'
// import { useAppStore } from '@/store/store'
// import { ProjectCase } from '@/const/const.interfaces'
import AnimatedWrapper from '@/components/AnimatedWrapper/AnimatedWrapper'

const GallerySection: React.FC = () => {
	// const projectModalOpen = useAppStore((state) => state.projectModalOpen)
	// const toggleProjectModalOpen = useAppStore(
	// 	(state) => state.toggleProjectModalOpen
	// )
	// const [selectedItem, setSelectedItem] = useState<string | null>(null)

	// const handleOpenModal = (targetProject: ProjectCase): void => {
	// 	setSelectedItem(targetProject.imgSrc)
	// 	toggleProjectModalOpen()
	// }

	return (
		<section className='mb-14 md:mb-20'>
			<div className='container px-4 mx-auto md:px-10 lg:px-20 topline mb-14'>
				<h2 className='font-semibold leading-tight'>Gallery</h2>
				<Button linkHref='/contact'>Contact&nbsp;Us</Button>
			</div>

			<div
				className={`${styles.grid} container mx-auto px-4 md:px-10 lg:px-20 grid md:grid-cols-12 gap-x-4 gap-y-7 xl:grid-rows-3 xl:gap-8`}>
				{ONE_PROJECT.map((oneProject, index) => (
					<div
						key={`oneProject-${index}`}
						className={styles.button}
						// tabIndex={0}
						// role='button'
						// onClick={() => handleOpenModal(oneProject)}
						// onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
						// 	if (!(e.code === 'Tab')) {
						// 		e.preventDefault()
						// 	}
						// 	if (e.code === 'Space' || e.code === 'Enter') {
						// 		handleOpenModal(oneProject)
						// 	}
						// }}
					>
						<AnimatedWrapper>
							<ProjectCard projectCase={oneProject} />
						</AnimatedWrapper>
					</div>
				))}

				{/* {projectModalOpen && selectedItem && (
					<ProjectModal imageSrc={selectedItem} />
				)} */}
			</div>
		</section>
	)
}

export default GallerySection

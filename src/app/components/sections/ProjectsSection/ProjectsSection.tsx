import React from 'react'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { PROJECTS_CASES } from '@/const/const'
import styles from './ProjectsSection.module.css'
import Button from '@/components/UI/Button/Button'
import Banner from '@/components/Banner/Banner'
import AnimatedWrapper from '@/components/AnimatedWrapper/AnimatedWrapper'

const ProjectsSection: React.FC = () => {
	const firstProjectsGroup = PROJECTS_CASES.slice(0, 3)
	const secondProjectsGroup = PROJECTS_CASES.slice(3, 9)
	const lastProjectCase = PROJECTS_CASES[9]

	return (
		<section
			id='projects'
			className='mb-14 px-4'>
			<div className='topline mb-14 mx-auto container md:px-10 lg:px-20'>
				<h2 className='leading-tight font-semibold'>Recent Projects</h2>
				<Button linkHref='/projects'>Discover&nbsp;All</Button>
			</div>

			<div className='container mx-auto md:px-10 lg:px-20'>
				<div
					className={`${styles.projectsGrid} mb-14 grid gap-y-12 lg:grid-cols-12 lg:gap-8 2xl:gap-16`}>
					{firstProjectsGroup.map((projectCase, index) => (
						<Link
							className={styles.projectLink}
							key={`${projectCase.title}-${index}`}
							href='/projects/case'>
							<AnimatedWrapper>
								<ProjectCard projectCase={projectCase} />
							</AnimatedWrapper>
						</Link>
					))}

					<Banner
						classes={styles.banner}
						svgImage={
							<svg
								className='w-full'
								width='580'
								height='362'
								viewBox='0 0 580 362'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M422.736 343.5C389.963 343.5 362.774 334.595 341.17 316.785C319.566 298.827 308.176 275.718 307 247.457H360.349C362.113 262.176 368.8 274.173 380.41 283.446C392.167 292.719 406.423 297.355 423.177 297.355C442.136 297.355 457.494 291.394 469.251 279.471C481.156 267.549 487.108 252.167 487.108 233.327C487.108 214.192 481.156 198.589 469.251 186.52C457.494 174.303 442.283 168.194 423.618 168.194C410.685 168.194 398.854 170.991 388.126 176.584C377.544 182.178 369.314 189.979 363.435 199.988H311.85L328.384 18.5H523.262V65.0863H373.356L365.199 158.259H366.522C373.135 147.955 382.688 139.86 395.18 133.972C407.672 127.937 421.708 124.92 437.286 124.92C467.708 124.92 492.766 135.002 512.46 155.168C532.153 175.186 542 200.724 542 231.781C542 264.899 530.904 291.836 508.712 312.59C486.667 333.197 458.008 343.5 422.736 343.5Z'
									fill='#06050f'
								/>
								<path
									d='M195.897 339.5V279.149H37V230.072C63.1885 180.553 107.253 110.695 169.193 20.5H250.186V232.503H293V279.149H250.186V339.5H195.897ZM88.6414 232.282V233.83H196.779V62.7238H195.897C168.972 101.779 147.418 134.055 131.234 159.551C115.051 185.048 100.853 209.291 88.6414 232.282Z'
									fill='#06050f'
								/>
							</svg>
						}
						topLineText='Yeas of architecture,'
						bottomLineText='planning, design'
					/>

					{secondProjectsGroup.map((projectCase, index) => (
						<Link
							className={styles.projectLink}
							key={`${projectCase.title}-${index}`}
							href='/projects/case'>
							<AnimatedWrapper>
								<ProjectCard projectCase={projectCase} />
							</AnimatedWrapper>
						</Link>
					))}

					<Banner
						classes={styles.banner}
						svgImage={
							<svg
								className='w-full'
								width='556'
								height='356'
								viewBox='0 0 556 356'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M421.006 339.5C390.053 339.5 364.68 331.195 344.886 314.584C325.225 297.841 314.93 276.447 314 250.402H369.595C371.322 262.361 376.968 271.995 386.533 279.304C396.097 286.613 407.721 290.267 421.404 290.267C436.947 290.267 449.5 285.483 459.065 275.916C468.763 266.348 473.612 253.791 473.612 238.243C473.612 222.43 468.763 209.673 459.065 199.973C449.368 190.273 436.88 185.422 421.603 185.422C399.418 185.422 383.012 194.06 372.385 211.334H318.583L332.93 44.5H513.664V94.5304H379.558L373.182 168.48H376.769C389.787 149.743 410.112 140.375 437.744 140.375C464.977 140.375 487.294 149.411 504.697 167.483C522.232 185.555 531 208.677 531 236.848C531 267.411 520.904 292.194 500.712 311.196C480.519 330.065 453.951 339.5 421.006 339.5Z'
									fill='#06050f'
								/>
								<path
									d='M307.172 327.955C300.754 334.318 292.197 337.5 281.5 337.5C270.803 337.5 262.179 334.318 255.627 327.955C249.209 321.46 246 313.108 246 302.901C246 292.826 249.209 284.607 255.627 278.244C262.179 271.748 270.803 268.5 281.5 268.5C292.197 268.5 300.754 271.682 307.172 278.045C313.724 284.408 317 292.693 317 302.901C317 313.108 313.724 321.46 307.172 327.955Z'
									fill='#06050f'
								/>
								<path
									d='M25 130.983C25 103.211 34.7057 80.6869 54.1172 63.4122C73.5287 46.1374 98.7902 37.5 129.902 37.5C159.95 37.5 184.413 45.3401 203.293 61.0203C222.306 76.5676 231.812 96.6993 231.812 121.416C231.812 137.096 226.893 152.709 217.054 168.257C207.215 183.671 189.865 203.072 165.002 226.459L109.958 278.882V282.47H236V332.5H28.3904V290.443L122.323 198.554C142.532 178.887 156.027 164.137 162.808 154.304C169.589 144.471 172.979 134.837 172.979 125.402C172.979 113.841 168.725 104.407 160.215 97.098C151.839 89.6565 141.07 85.9358 127.907 85.9358C113.947 85.9358 102.579 90.1216 93.8043 98.4932C85.1623 106.732 80.8412 117.495 80.8412 130.784V131.98H25V130.983Z'
									fill='#06050f'
								/>
								<path
									d='M527.758 39.957H519.5V0.5H527.758V18.082H528.25L542.824 0.5H552.012L537.629 17.8086L553.023 39.957H543.125L531.668 23.4414L527.758 28.0625V39.957Z'
									fill='#06050f'
								/>
							</svg>
						}
						topLineText='With over 2.600'
						bottomLineText='projects completed'
					/>

					<Link
						className={styles.projectLink}
						href='/projects/case'>
						<AnimatedWrapper>
							<ProjectCard projectCase={lastProjectCase} />
						</AnimatedWrapper>
					</Link>
				</div>

				<div className='text-center'>
					<p className={`${styles.title} mb-6`}>Start a Project?</p>
					<Button linkHref='/contact'>Contact&nbsp;Us</Button>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection

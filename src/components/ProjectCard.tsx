import { ProjectCase } from '@/const/const.types'

import ImageWithSkeleton from './UI/ImageWithSkeleton'
import Logo from './UI/Logo'

const ProjectCard = ({ title, subtitle, media }: ProjectCase) => (
	<div className='relative flex flex-col h-full gap-1 tracking-tight text-center bg-neutral-100 md:text-left md:bg-transparent'>
		<div className='flex flex-col justify-start h-full gap-2 md:gap-4'>
			<div
				className='relative w-full max-h-96 md:max-h-[640px] xl:max-h-[800px] grow'
				style={{ aspectRatio: `${media.width} / ${media.height}` }}>
				<ImageWithSkeleton
					src={media.src}
					alt={media.alt}
					fill
					sizes={media.sizes}
					loading='lazy'
					quality={100}
					className='flex-grow w-full h-full shadow min-h-20 bg-dark-color'
				/>
			</div>

			<p className='mb-2 text-2xl font-semibold leading-tight'>
				{title}
				<br />
				<span className='text-lg'>{subtitle}</span>
			</p>
		</div>
		<Logo className='absolute w-1/3 pointer-events-none left-4 top-4 max-w-16' />
	</div>
)

export default ProjectCard

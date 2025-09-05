import ImageWithSkeleton from '@/components/UI/ImageWithSkeleton';
import { SingleProject } from '../Content';
import Info from '../Info';

interface Props {
	title: SingleProject['title'];
	media: SingleProject['media'];
	description: SingleProject['description'];
	info: SingleProject['info'];
}

const Hero = ({ title, media, description, info }: Props) => (
	<section className='mb-14 pt-6'>
		<div className='container mx-auto px-4 md:px-10 lg:px-20'>
			<h1 className='mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl'>
				{title}
			</h1>

			<div className='grid gap-6 sm:grid-cols-[1fr_auto] xl:grid-cols-[66%_auto] xl:grid-rows-[auto_auto]'>
				<ImageWithSkeleton
					src={media.url}
					alt={media.alternativeText ?? title}
					width={media.width ?? 1005}
					height={media.height ?? 754}
					priority
					fetchPriority='high'
					sizes='(max-width: 639px) 84vw, (max-width: 767px) 360px, (max-width: 1023px) 440px, (max-width: 1279px) 616px, 1005px'
					className='block h-full min-h-48 bg-dark-color shadow xl:row-span-2'
				/>

				<div className='flex flex-wrap gap-x-8 gap-y-4 sm:flex-col sm:gap-4'>
					{info?.length &&
						info.map((item) => item && <Info key={item?.label} {...item} />)}
				</div>

				<p className='text-balance text-base text-gray-800 sm:max-xl:col-span-2 md:text-lg xl:self-end'>
					{description}
				</p>
			</div>
		</div>
	</section>
);

export default Hero;

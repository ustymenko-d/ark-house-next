import AnimatedWrapper from './AnimatedWrapper';
import ImageWithSkeleton from './UI/ImageWithSkeleton';
import Logo from './UI/Logo';

interface Props {
	title: string;
	location?: string | null;
	media: {
		url: string;
		alternativeText?: string | null;
		width?: number | null;
		height?: number | null;
	};
}

const ProjectCard = ({ title, location, media }: Props) => (
	<AnimatedWrapper className='h-full'>
		<div className='relative flex h-full flex-col gap-1 bg-neutral-100 text-center tracking-tight md:bg-transparent md:text-left'>
			<div className='flex h-full flex-col justify-start gap-2 md:gap-4'>
				<div
					className='relative max-h-[640px] w-full grow xl:max-h-[800px]'
					style={{ aspectRatio: `${media.width} / ${media.height}` }}>
					<ImageWithSkeleton
						src={media.url}
						alt={media.alternativeText ?? title}
						width={media.width ?? 656}
						height={media.height ?? 800}
						loading='lazy'
						quality={100}
						className='h-full min-h-20 w-full flex-grow bg-dark-color shadow'
					/>
				</div>

				<p className='mb-2 text-2xl font-semibold leading-tight'>
					{title}
					<br />
					<span className='text-lg'>{location}</span>
				</p>
			</div>
			<Logo className='pointer-events-none absolute left-4 top-4 w-1/3 max-w-16' />
		</div>
	</AnimatedWrapper>
);

export default ProjectCard;

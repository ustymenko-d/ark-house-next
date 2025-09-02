import { getImageProps } from 'next/image';

// import AnimatedWrapper from '@/components/AnimatedWrapper';

const commonProps = {
	alt: 'Pyramid-shaped building',
	sizes:
		'(max-width: 639px) 97vw, (max-width: 767px) 640px, (max-width: 1023px) 768px, (max-width: 1279px) 1024px, (max-width: 1535px) 1280px, 1536px',
	quality: 75,
	priority: true,
} as const;

const sources = [
	{
		media: '(max-width: 1023px)',
		image: {
			src: '/img/home-page/hero@mob.png',
			width: 768,
			height: 523,
		},
	},
	{
		media: '(min-width: 1024px)',
		image: {
			src: '/img/home-page/hero.png',
			width: 1536,
			height: 763,
		},
	},
] as const;

const HeroImage = () => {
	const imageProps = sources.map(
		({ image }) => getImageProps({ ...commonProps, ...image }).props
	);

	return (
		// <AnimatedWrapper
		// 	duration={0.6}
		// 	className='absolute bottom-0 left-0 right-0 h-full w-full'>
		<picture>
			{sources.map(({ media }, index) => (
				<source
					key={media}
					media={media}
					srcSet={imageProps[index].srcSet}
					sizes={commonProps.sizes}
				/>
			))}
			<img
				{...imageProps[0]}
				alt={commonProps.alt}
				className='pointer-events-none absolute bottom-0 left-0 right-0 h-auto w-full object-contain object-bottom lg:px-20'
				loading='eager'
				decoding='async'
				fetchPriority='high'
			/>
		</picture>
		// </AnimatedWrapper>
	);
};

export default HeroImage;

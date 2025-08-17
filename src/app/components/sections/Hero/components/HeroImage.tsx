import { getImageProps } from 'next/image'

const commonProps = {
	alt: 'Pyramid-shaped building',
	sizes:
		'(max-width: 639px) 97vw, (max-width: 767px) 640px, (max-width: 1023px) 768px, (max-width: 1279px) 1024px, (max-width: 1535px) 1280px, 1536px',
	quality: 75,
	priority: true,
} as const

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
] as const

const HeroImage = () => {
	const imageProps = sources.map(({ image }) => getImageProps({ ...commonProps, ...image }).props)

	return (
		<picture>
			{sources.map(({ media }, index) => (
				<source
					key={media}
					media={media}
					srcSet={imageProps[index].srcSet}
				/>
			))}
			<img
				{...imageProps[0]}
				alt={commonProps.alt}
				className='absolute bottom-0 left-0 right-0 object-contain object-bottom w-full h-auto pointer-events-none lg:px-20'
				loading='eager'
				decoding='async'
				fetchPriority='high'
			/>
		</picture>
	)
}

export default HeroImage

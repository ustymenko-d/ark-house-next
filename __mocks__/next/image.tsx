import { ImageProps, StaticImageData } from 'next/image';

type Props = ImageProps & { onLoad?: () => void };

const NextImageMock = ({ src, alt, className, onLoad, ...rest }: Props) => {
	const normalizedSrc =
		typeof src === 'string' ? src : (src as StaticImageData).src;

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={normalizedSrc}
			alt={alt ?? ''}
			className={className}
			onLoad={onLoad}
			data-testid='mocked-image'
			{...rest}
		/>
	);
};

export default NextImageMock;

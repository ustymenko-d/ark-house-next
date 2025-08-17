'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

const ImageWithSkeleton = ({ className, alt, ...rest }: ImageProps) => {
	const [loading, setLoading] = useState(true);

	return (
		<div className={clsx('relative', className)}>
			{loading && (
				<div className='absolute inset-0 animate-pulse bg-neutral-200' />
			)}

			<Image
				{...rest}
				alt={alt}
				onLoad={() => setLoading(false)}
				className={clsx(
					'h-full w-full transition-opacity duration-300',
					loading ? 'opacity-0' : 'opacity-100'
				)}
			/>
		</div>
	);
};

export default ImageWithSkeleton;

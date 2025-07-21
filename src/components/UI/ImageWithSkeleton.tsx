'use client'

import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

const ImageWithSkeleton = ({ className, alt, ...rest }: ImageProps) => {
	const [loading, setLoading] = useState(true)

	return (
		<div className={clsx('relative', className)}>
			{loading && <div className='absolute inset-0 animate-pulse bg-neutral-200' />}

			<Image
				{...rest}
				alt={alt}
				onLoadingComplete={() => setLoading(false)}
				className={clsx('w-full h-full transition-opacity duration-300', loading ? 'opacity-0' : 'opacity-100')}
			/>
		</div>
	)
}

export default ImageWithSkeleton

import Image from 'next/image'

import { Article } from '@/const/const.types'

const ArticleItem = ({ title, content, dateTime, imgSrc }: Article) => (
	<div className='flex flex-col h-full bg-neutral-100'>
		<picture>
			<source
				media='(max-width: 1024px)'
				srcSet={`${imgSrc}@mob.webp`}
				type='image/webp'
			/>
			<source
				media='(max-width: 1024px)'
				srcSet={`${imgSrc}@mob.jpg`}
			/>
			<source
				srcSet={`${imgSrc}.webp`}
				type='image/webp'
			/>
			<Image
				className='aspect-[7/5] flex-grow bg-dark-color'
				src={`${imgSrc}.jpg`}
				loading='lazy'
				alt=''
				width={2221}
				height={1666}
			/>
		</picture>

		<div className='p-4'>
			<time
				className='mb-1 text-xl text-zinc-800'
				dateTime={dateTime}>
				{dateTime}
			</time>
			<h3 className='mb-1 text-2xl font-semibold'>{title}</h3>
			<p className='text-lg'>{content}</p>
		</div>
	</div>
)

export default ArticleItem

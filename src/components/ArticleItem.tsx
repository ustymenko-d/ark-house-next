import Image from 'next/image'

import { Article } from '@/const/const.types'

const ArticleItem = ({ title, content, dateTime, media }: Article) => (
	<div className='relative flex flex-col h-full bg-neutral-100'>
		<Image
			className='aspect-[7/5] w-full flex-grow bg-dark-color'
			src={media.src}
			alt={media.alt}
			quality={100}
			width={media?.width}
			height={media?.height}
			sizes={media?.sizes}
		/>

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

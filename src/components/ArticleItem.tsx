import { Article } from '@/const/const.types';

import ImageWithSkeleton from './UI/ImageWithSkeleton';

const ArticleItem = ({ title, content, dateTime, media }: Article) => (
	<div className='relative flex h-full flex-col bg-neutral-100'>
		<ImageWithSkeleton
			className='aspect-[7/5] w-full bg-dark-color'
			src={media.src}
			alt={media.alt}
			quality={100}
			width={media?.width}
			height={media?.height}
			sizes={media?.sizes}
		/>

		<div className='flex flex-col gap-1 p-4'>
			<time className='text-sm text-gray-600 md:text-base' dateTime={dateTime}>
				{dateTime}
			</time>
			<h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
			<p className='text-base text-gray-800 md:text-lg'>{content}</p>
		</div>
	</div>
);

export default ArticleItem;

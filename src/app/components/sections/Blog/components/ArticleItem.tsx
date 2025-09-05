'use client';

import clsx from 'clsx';

import AnimatedWrapper from '@/components/AnimatedWrapper';
import { ArticlesQuery } from '@/graphql/generated';
import { useAppStore } from '@/store';
import ImageWithSkeleton from '../../../../../components/UI/ImageWithSkeleton';

type Props = NonNullable<NonNullable<ArticlesQuery['blogArticles']>[number]>;

const ArticleItem = ({ date, title, description, media }: Props) => {
	const toggleModalOpen = useAppStore((s) => s.toggleModalOpen);
	const isModalOpen = useAppStore((s) => s.modalOpen);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Tab') return;
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
			toggleModalOpen();
		}
	};

	return (
		<div
			role='button'
			aria-haspopup='dialog'
			aria-expanded={isModalOpen}
			tabIndex={0}
			className={clsx(
				'cursor-pointer bg-neutral-100 transition-[outline-offset] duration-150',
				'hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-dark-color',
				'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-color'
			)}
			onClick={toggleModalOpen}
			onKeyDown={handleKeyDown}>
			<AnimatedWrapper className='h-full'>
				<div className='relative flex h-full flex-col bg-neutral-100'>
					<ImageWithSkeleton
						className='aspect-[7/5] w-full bg-dark-color'
						src={media.url}
						alt={media.alternativeText ?? 'Article image'}
						quality={90}
						width={media.width ?? 540}
						height={media.height ?? 405}
						sizes='(max-width: 639px) 587px, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 412px, 540px'
					/>

					<div className='flex flex-col gap-1 p-4'>
						<time
							className='text-sm text-gray-600 md:text-base'
							dateTime={date}>
							{date}
						</time>
						<h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
						<p className='text-base text-gray-800 md:text-lg'>{description}</p>
					</div>
				</div>
			</AnimatedWrapper>
		</div>
	);
};

export default ArticleItem;

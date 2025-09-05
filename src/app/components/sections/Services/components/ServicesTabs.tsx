import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';

import ImageWithSkeleton from '@/components/UI/ImageWithSkeleton';
import { SERVICES_TABS } from '@/const/const';

const ServicesTabs = ({ className }: { className?: string }) => {
	const { tabs, tabsContent } = SERVICES_TABS;

	return (
		<Tabs.Root
			defaultValue={tabs[0]}
			className={clsx('flex flex-col gap-8 xl:gap-y-6', className)}>
			<Tabs.List
				aria-label='Services'
				className={clsx(
					'flex w-full flex-wrap items-center gap-x-4 gap-y-2',
					'sm:justify-between'
				)}>
				{tabs.map((elem) => (
					<Tabs.Trigger
						key={`${elem}-tab-trigger`}
						value={elem}
						className={clsx(
							'animatedUnderline text-2xl font-semibold text-dark-color',
							'data-[state=active]:[background-size:100%_1px]'
						)}>
						{elem}
					</Tabs.Trigger>
				))}
			</Tabs.List>
			{tabsContent.map((elem) => {
				const { tabName, content } = elem;

				return (
					<Tabs.Content
						key={`${tabName}-tab-content`}
						value={tabName}
						className='aspect-square w-full'>
						<ImageWithSkeleton
							className='h-full object-cover'
							src={content}
							alt={`${tabName} image`}
							fill
							sizes='(max-width: 639px) 587px, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 573px, 519px'
							quality={90}
							loading='lazy'
						/>
					</Tabs.Content>
				);
			})}
		</Tabs.Root>
	);
};

export default ServicesTabs;

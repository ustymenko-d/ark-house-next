import clsx from 'clsx';
import { motion } from 'framer-motion';

import ImageWithSkeleton from '@/components/UI/ImageWithSkeleton';
import { ITabContentProps } from '@/const/const.types';

const ServicesTypeContent = ({ tabsContent, activeTab }: ITabContentProps) => (
	<div className='relative h-full w-full'>
		{tabsContent.map((item, index) => {
			const { tabName, content } = item;
			const isActive = activeTab === tabName;

			return (
				<motion.div
					key={`${tabName}-${index}`}
					aria-hidden={!isActive}
					className={clsx('absolute inset-0 transition-opacity duration-300', {
						'pointer-events-auto visible opacity-100': isActive,
						'pointer-events-none invisible opacity-0': !isActive,
					})}>
					<div
						id={`services-tabpanel-${index}`}
						role='tabpanel'
						aria-labelledby={`services-tab-${index}`}
						className='h-full'>
						<ImageWithSkeleton
							className='h-full object-cover'
							src={content as string}
							alt={`${tabName} image`}
							fill
							sizes='(max-width: 639px) 587px, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 573px, 519px'
							quality={100}
							loading='lazy'
						/>
					</div>
				</motion.div>
			);
		})}
	</div>
);

export default ServicesTypeContent;

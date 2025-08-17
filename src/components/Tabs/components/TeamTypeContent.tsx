'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import AnimatedWrapper from '@/components/AnimatedWrapper';
import TeamMemberCard from '@/components/TeamMemberCard';
import { ITabContentProps, TeamMember } from '@/const/const.types';

const TeamTypeContent = ({ tabsContent, activeTab }: ITabContentProps) => (
	<div className='w-full'>
		{tabsContent.map((item, index) => {
			const isActive = item.tabName === activeTab;

			return (
				<motion.div
					key={`${item.tabName}-${index}`}
					id={`team-tabpanel-${index}`}
					role='tabpanel'
					aria-labelledby={`team-tab-${index}`}
					aria-hidden={!isActive}
					initial={false}
					animate={{ opacity: isActive ? 1 : 0 }}
					transition={{ duration: 0.3 }}
					className={clsx('w-full overflow-hidden', {
						'pointer-events-auto h-auto': isActive,
						'pointer-events-none h-0': !isActive,
					})}>
					<div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
						{(item.content as TeamMember[]).map((member, memberIndex) => (
							<AnimatedWrapper
								typeFade={false}
								key={`${member.name}-${memberIndex}`}
								delay={memberIndex * 0.1}
							>
								<TeamMemberCard {...member} />
							</AnimatedWrapper>
						))}
					</div>
				</motion.div>
			);
		})}
	</div>
);

export default TeamTypeContent;

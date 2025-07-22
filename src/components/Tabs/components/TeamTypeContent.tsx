'use client'

import { AnimatePresence, motion } from 'framer-motion'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import TeamMemberCard from '@/components/TeamMemberCard'
import { ITabContentProps, TeamMember } from '@/const/const.types'

const TeamTypeContent = ({ tabsContent, activeTab }: ITabContentProps) => (
	<div className='w-full'>
		<AnimatePresence
			initial={false}
			mode='wait'>
			{tabsContent.map((item, index) => {
				if (item.tabName !== activeTab) return null

				return (
					<motion.div
						key={`${item.tabName}-${index}`}
						id={`team-tabpanel-${index}`}
						role='tabpanel'
						aria-labelledby={`team-tab-${index}`}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						style={{ overflow: 'hidden' }}
						className='w-full'>
						<div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
							{(item.content as TeamMember[]).map((member, memberIndex) => (
								<AnimatedWrapper
									typeFade={false}
									key={`${member.name}-${memberIndex}`}
									delay={memberIndex * 0.1}>
									<TeamMemberCard {...member} />
								</AnimatedWrapper>
							))}
						</div>
					</motion.div>
				)
			})}
		</AnimatePresence>
	</div>
)

export default TeamTypeContent

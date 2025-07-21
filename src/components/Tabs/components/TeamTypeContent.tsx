'use client'

import { AnimatePresence } from 'framer-motion'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import TeamMemberCard from '@/components/TeamMemberCard'
import { ITabContentProps, TeamMember } from '@/const/const.types'

const TeamTypeContent = ({ tabsContent, activeTab }: ITabContentProps) => (
	<AnimatePresence mode='wait'>
		{tabsContent.map((item, index) => {
			if (activeTab !== item.tabName) return null

			return (
				<AnimatedWrapper
					key={`${item.tabName}-${index}`}
					typeFade={false}
					duration={0.3}
					className='h-full'>
					<div
						id={`team-tabpanel-${index}`}
						role='tabpanel'
						aria-labelledby={`team-tab-${index}`}
						className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
						{(item.content as TeamMember[]).map((member: TeamMember, memberIndex: number) => (
							<AnimatedWrapper
								typeFade={false}
								key={`${member.name}-${memberIndex}`}
								delay={memberIndex * 0.1}>
								<TeamMemberCard {...member} />
							</AnimatedWrapper>
						))}
					</div>
				</AnimatedWrapper>
			)
		})}
	</AnimatePresence>
)

export default TeamTypeContent

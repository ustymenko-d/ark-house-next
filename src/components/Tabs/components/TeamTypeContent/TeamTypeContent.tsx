import clsx from 'clsx'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import TeamMemberCard from '@/components/TeamMemberCard'
import { OneTabContent, TeamMember } from '@/const/const.types'

interface TeamTypeContentProps {
	tabsContent: OneTabContent[]
	activeTab: string
}

const TeamTypeContent = ({ tabsContent, activeTab }: TeamTypeContentProps) =>
	tabsContent.map((item, index) => (
		<div
			key={`${item.tabName}-${index}`}
			className={clsx({
				'h-full': activeTab === item.tabName,
				'overflow-hidden invisible opacity-0 h-0 w-0':
					activeTab !== item.tabName,
			})}
			id={`team-tabpanel-${index}`}
			role='tabpanel'
			aria-labelledby={`team-tab-${index}`}>
			<div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
				{(item.content as TeamMember[]).map(
					(member: TeamMember, memberIndex: number) => (
						<AnimatedWrapper
							typeFade={false}
							key={`${member.name}-${memberIndex}`}
							delay={(memberIndex + memberIndex) * 0.1}>
							<TeamMemberCard teamMember={member} />
						</AnimatedWrapper>
					)
				)}
			</div>
		</div>
	))

export default TeamTypeContent

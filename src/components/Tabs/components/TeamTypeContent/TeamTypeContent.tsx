import { OneTabContent } from '@/const/const.interfaces'
import React from 'react'

interface TeamTypeContentProps {
	activeTabContent: OneTabContent | null
}

const TeamTypeContent: React.FC<TeamTypeContentProps> = ({
	activeTabContent,
}) => {
	return <div>TeamTypeContent</div>
}

export default TeamTypeContent

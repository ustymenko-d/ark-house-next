import { OneTabContent } from '@/const/const.interfaces'
import React from 'react'

interface ProjectsTypeContentProps {
	activeTabContent: OneTabContent | null
}

const ProjectsTypeContent: React.FC<ProjectsTypeContentProps> = ({
	activeTabContent,
}) => {
	console.log(activeTabContent)

	return <div>ProjectsTypeContent</div>
}

export default ProjectsTypeContent

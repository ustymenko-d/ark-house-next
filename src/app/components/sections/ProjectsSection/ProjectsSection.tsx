import React from 'react'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { PROJECTS_CASES } from '@/const/const'

const ProjectsSection: React.FC = () => {
	return (
		<section>
			<div className='container grid grid-cols-2 gap-4'>
				{PROJECTS_CASES.map((projectCase, index) => (
					<ProjectCard
						key={`${projectCase.title}-${index}`}
						projectCase={projectCase}
					/>
				))}
			</div>
		</section>
	)
}

export default ProjectsSection

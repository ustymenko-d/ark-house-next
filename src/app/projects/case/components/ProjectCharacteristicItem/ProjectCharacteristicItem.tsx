import { ProjectCharacteristic } from '@/const/const.interfaces'
import React from 'react'

interface ProjectCharacteristicProps {
	charItem: ProjectCharacteristic
}

const ProjectCharacteristicItem: React.FC<ProjectCharacteristicProps> = ({
	charItem,
}) => {
	const { characteristic, value } = charItem
	return (
		<div className='flex flex-col gap-1 text-xl'>
			<span className='font-semibold uppercase'>{characteristic}</span>
			<span>{value}</span>
		</div>
	)
}

export default ProjectCharacteristicItem

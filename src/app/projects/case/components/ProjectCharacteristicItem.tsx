import { ProjectCharacteristic } from '@/const/const.types'

const ProjectCharacteristicItem = ({
	charItem,
}: {
	charItem: ProjectCharacteristic
}) => (
	<div className='flex flex-col gap-1 text-xl'>
		<span className='font-semibold uppercase'>{charItem.characteristic}</span>
		<span>{charItem.value}</span>
	</div>
)

export default ProjectCharacteristicItem

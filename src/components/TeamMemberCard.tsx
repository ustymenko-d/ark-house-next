import Image from 'next/image'

import { TeamMember } from '@/const/const.types'

const TeamMemberCard = ({ name, role, media }: TeamMember) => (
	<div className='relative'>
		<Image
			className='block w-full shadow aspect-square bg-dark-color'
			src={media.src}
			alt={media.alt}
			width={366}
			height={366}
			sizes='(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 324px, (max-width: 1279px) 412px, 366px'
		/>

		<p className='p-3 text-2xl'>
			{name}
			<br />
			<span className='text-lg'>{role}</span>
		</p>
	</div>
)

export default TeamMemberCard

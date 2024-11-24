import { TeamMember } from '@/const/const.interfaces'
import React from 'react'

interface TeamMemberCardProps {
	teamMember: TeamMember
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ teamMember }) => {
	const { imgSrc, name, role } = teamMember

	return (
		<div className=''>
			<picture>
				<source
					media='(max-width: 1250px)'
					srcSet={`/img${imgSrc}@mob.webp`}
					type='image/webp'
				/>
				<source
					media='(max-width: 1250px)'
					srcSet={`/img${imgSrc}@mob.jpg`}
				/>
				<source
					srcSet={`/img${imgSrc}.webp`}
					type='image/webp'
				/>
				<img
					className='block w-full aspect-square bg-dark-color shadow'
					src={`/img${imgSrc}.jpg`}
					alt=''
					loading='lazy'
				/>
			</picture>
			<p className='p-3 text-2xl'>
				{name}
				<br />
				<span className='text-lg'>{role}</span>
			</p>
		</div>
	)
}

export default TeamMemberCard

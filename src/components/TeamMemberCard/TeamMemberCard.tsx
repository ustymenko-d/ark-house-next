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
					className='w-full aspect-square mb-2 bg-dark-color'
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

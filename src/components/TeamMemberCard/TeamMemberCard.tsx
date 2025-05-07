import { TeamMember } from '@/const/const.types'

const TeamMemberCard = ({ teamMember }: { teamMember: TeamMember }) => {
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
					className='block w-full shadow aspect-square bg-dark-color'
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

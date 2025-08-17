import { TeamMember } from '@/const/const.types';

import ImageWithSkeleton from './UI/ImageWithSkeleton';

const TeamMemberCard = ({ name, role, media }: TeamMember) => (
	<div className='relative'>
		<ImageWithSkeleton
			className='block aspect-square w-full bg-dark-color shadow'
			src={media.src}
			alt={media.alt}
			width={366}
			height={366}
			sizes='(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 324px, (max-width: 1279px) 412px, 366px'
		/>

		<p className='py-4 text-2xl'>
			{name}
			<br />
			<span className='text-base leading-relaxed text-gray-800 md:text-lg'>
				{role}
			</span>
		</p>
	</div>
);

export default TeamMemberCard;

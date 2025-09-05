import { SingleProject } from './Content';

type InfoItem = NonNullable<SingleProject['info']>[number];

const Info = ({ label, value }: NonNullable<InfoItem>) => (
	<div className='flex flex-col gap-1 text-balance text-base leading-relaxed text-gray-800 md:text-lg'>
		<span className='font-semibold uppercase'>{label}</span>
		<span>{value}</span>
	</div>
);

export default Info;

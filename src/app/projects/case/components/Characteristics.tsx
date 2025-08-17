import { ProjectCharacteristic } from '@/const/const.types';

const Characteristics = ({ char }: { char: ProjectCharacteristic }) => (
	<div className='flex flex-col gap-1 text-balance text-base leading-relaxed text-gray-800 md:text-lg'>
		<span className='font-semibold uppercase'>{char.characteristic}</span>
		<span>{char.value}</span>
	</div>
);

export default Characteristics;

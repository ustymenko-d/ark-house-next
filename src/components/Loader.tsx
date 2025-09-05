import 'ldrs/react/Square.css';

import clsx from 'clsx';
import { Square } from 'ldrs/react';

const Loader = ({ className }: { className?: string }) => (
	<div className={clsx('flex items-center gap-4', className)}>
		<Square
			size='25'
			stroke='4'
			strokeLength='0.25'
			bgOpacity='0.1'
			speed='1.2'
			color='rgba(6, 5, 15, 1)'
		/>

		<p className='text-xl tracking-tight md:text-2xl'>Loading...</p>
	</div>
);
export default Loader;

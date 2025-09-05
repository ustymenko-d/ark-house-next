import 'ldrs/react/Square.css';

import { Square } from 'ldrs/react';

const Loader = () => (
	<div className='flex h-64 items-center justify-center gap-4'>
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

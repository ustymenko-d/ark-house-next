const Loading = () => (
	<div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
		<div className='relative flex h-60 w-60 items-center justify-center overflow-hidden'>
			<div className='absolute h-full w-full border border-neutral-900 bg-transparent'></div>
			<div className='absolute h-3/4 w-9/12 border border-neutral-900 bg-white'></div>
			<div className='absolute -z-10 aspect-square h-96 w-96 rotate-45 animate-moveDiagonal bg-dark-color'></div>
		</div>
	</div>
);

export default Loading;

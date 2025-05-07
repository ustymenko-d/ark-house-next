const Loading = () => (
	<div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
		<div className='relative flex items-center justify-center overflow-hidden w-60 h-60'>
			<div className='absolute w-full h-full bg-transparent border border-neutral-900'></div>
			<div className='absolute w-9/12 bg-white border h-3/4 border-neutral-900'></div>
			<div className='absolute rotate-45 -z-10 w-96 h-96 aspect-square animate-moveDiagonal bg-dark-color'></div>
		</div>
	</div>
)

export default Loading

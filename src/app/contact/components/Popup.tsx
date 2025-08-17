import CloseButton from '@/components/UI/CloseButton';

const Popup = ({ closePopup }: { closePopup: () => void }) => (
	<div className='pointer-events-none fixed left-1/2 top-4 z-50 mx-auto -translate-x-1/2 px-4 max-lg:container'>
		<output className='pointer-events-auto mx-auto flex max-w-fit items-start justify-between gap-4 bg-white p-4 shadow-2xl'>
			<p className='lg:w-4/5'>
				<span className='text-lg font-bold'>Successfully submitted.</span>
				<br /> <strong>Note:</strong> This is an example page, and no data has
				been sent.
			</p>
			<CloseButton onClick={closePopup} aria-label='Close popup' />
		</output>
	</div>
);

export default Popup;

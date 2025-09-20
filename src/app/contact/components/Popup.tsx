import CloseButton from '@/components/UI/CloseButton';

const Popup = ({ closePopup }: { closePopup: () => void }) => (
	<div className='pointer-events-none fixed left-1/2 top-4 z-50 mx-auto -translate-x-1/2 px-4 max-lg:container'>
		<div className='pointer-events-auto mx-auto flex max-w-fit items-start justify-between gap-4 bg-white p-4 shadow-2xl'>
			<div className='flex flex-col gap-2'>
				<h2 className='pt-1 text-lg font-bold'>Successfully submitted</h2>
				<p className='lg:w-4/5'>
					<strong>Note:</strong> This is an example page, and no data has been
					sent.
				</p>
			</div>

			<CloseButton onClick={closePopup} aria-label='Close popup' />
		</div>
	</div>
);

export default Popup;

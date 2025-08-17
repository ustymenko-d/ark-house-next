import Button from '@/components/UI/Button';

const NotFound = () => (
	<main className='flex min-h-80 flex-auto flex-col items-center justify-center gap-4 px-4 text-center'>
		<h2 className='text-4xl font-bold md:text-6xl'>Not Found</h2>
		<p className='text-2xl'>Could not find requested resource</p>
		<Button to='/'>Return Home</Button>
	</main>
);

export default NotFound;

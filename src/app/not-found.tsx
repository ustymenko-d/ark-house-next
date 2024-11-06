import Button from '@/components/UI/Button/Button'

export default function NotFound() {
	return (
		<main className='flex-auto min-h-80 px-4 flex flex-col justify-center items-center gap-4 text-center'>
			<h2 className='text-4xl font-bold md:text-6xl'>Not Found</h2>
			<p className='text-2xl'>Could not find requested resource</p>
			<Button linkHref='/'>Return Home</Button>
		</main>
	)
}

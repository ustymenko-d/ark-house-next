import Image from 'next/image'

const History = () => (
	<section className='mb-16'>
		<h2 className='mb-4 text-5xl font-semibold leading-normal tracking-tight'>
			Our history
		</h2>

		<picture>
			<source
				srcSet='/img/history-page/builders.webp'
				type='image/webp'
			/>
			<Image
				className='w-full mb-4 bg-dark-color'
				src='/img/history-page/builders.jpg'
				width={736}
				height={460}
				alt='Building'
			/>
		</picture>
		<p className='text-xl'>
			For over four decades, ARK House, founded by renowned architect John Smith
			in 1975, has been a leader in the industry known for its innovative
			designs and commitment to client satisfaction. The agency&apos;s early
			work, including the Smith Tower in Seattle, established Smith&apos;s
			reputation as a leading architect. Over the years, ARK House has completed
			numerous high-profile projects, including the iconic Guggenheim Museum in
			Bilbao, Spain. The agency&apos;s success is due to its commitment to
			sustainability and community engagement, as well as its adaptation to new
			trends and technologies. Today, ARK House continues to push boundaries in
			architecture while setting new standards for innovation and excellence.
		</p>
	</section>
)

export default History

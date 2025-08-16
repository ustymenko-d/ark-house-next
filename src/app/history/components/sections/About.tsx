import AnimatedWrapper from '@/components/AnimatedWrapper'
import Button from '@/components/UI/Button'
import ImageWithSkeleton from '@/components/UI/ImageWithSkeleton'

const About = () => (
	<section className='mb-14 grid gap-6 xl:grid-cols-[61.3%_auto] xl:grid-rows-[auto_1fr]'>
		<h1 className='text-4xl font-semibold leading-tight tracking-tight md:text-5xl xl:col-span-2'>
			Who we are
		</h1>

		<ImageWithSkeleton
			className='w-full h-full bg-dark-color'
			src='/img/history-page/meet.jpg'
			width={844}
			height={563}
			sizes='(max-width: 639px) 92vw, (max-width: 767px) 608px, (max-width: 1023px) 688px, (max-width: 1279px) 864px, 844px'
			quality={100}
			alt='Meet'
		/>

		<div className='flex flex-col gap-4 text-base md:text-lg'>
			<p className='text-gray-800 text-balance'>
				We are dedicated individuals from a range of different countries. Based in Oslo, with
				offices in Copenhagen, London and Reykjavik, we are actively involved in projects in various
				countries across Europe, Africa, the Middle East and Asia.
			</p>
			<p className='text-gray-800 text-balance'>
				Together, we are a community with a culture for beautiful and outstanding architecture, a
				culture that is Powered by Commitment.
			</p>
			<div className='flex flex-col gap-6 pt-4 xl:mt-auto'>
				<AnimatedWrapper>
					<p className='text-2xl font-semibold leading-tight tracking-tight'>
						Do you want to work with us?
					</p>
				</AnimatedWrapper>
				<AnimatedWrapper
					delay={0.2}
					className='flex'>
					<Button to='/contact'>Our&nbsp;Vacancies</Button>
				</AnimatedWrapper>
			</div>
		</div>
	</section>
)

export default About

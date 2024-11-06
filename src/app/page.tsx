import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'

const Home: React.FC = () => {
	return (
		<main className='flex-auto'>
			<Hero />
			<About />
		</main>
	)
}

export default Home

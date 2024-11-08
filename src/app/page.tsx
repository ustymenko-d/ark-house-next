import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Blog from './components/sections/Blog/Blog'

const Home: React.FC = () => {
	return (
		<main className='flex-auto'>
			<Hero />
			<About />
			<Blog />
		</main>
	)
}

export default Home

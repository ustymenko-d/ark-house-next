import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Blog from './components/sections/Blog/Blog'
import Services from './components/sections/Services/Services'

const Home: React.FC = () => {
	return (
		<main className='flex-auto'>
			<Hero />
			<About />
			<Services />
			<Blog />
		</main>
	)
}

export default Home

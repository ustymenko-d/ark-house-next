import About from './components/sections/About'
import Blog from './components/sections/Blog'
import Hero from './components/sections/Hero/Hero'
import Projects from './components/sections/Projects/Projects'
import Services from './components/sections/Services'
import Team from './components/sections/Team'

const Home = () => (
	<main>
		<Hero />
		<About />
		<Services />
		<Projects />
		<Team />
		<Blog />
	</main>
)

export default Home

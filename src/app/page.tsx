import About from './components/sections/About';
import Blog from './components/sections/Blog/Blog';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import Services from './components/sections/Services';
import Team from './components/sections/Team';

const Home = async () => (
	<main>
		<Hero />
		<About />
		<Services />
		<Projects />
		<Team />
		<Blog />
	</main>
);
export default Home;

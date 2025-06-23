import AboutSection from './components/sections/AboutSection/AboutSection'
import BlogSection from './components/sections/BlogSection/BlogSection'
import HeroSection from './components/sections/HeroSection/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection'
import ServicesSection from './components/sections/ServicesSection/ServicesSection'
import TeamSection from './components/sections/TeamSection/TeamSection'

const Home = () => (
	<main>
		<HeroSection />
		<AboutSection />
		<ServicesSection />
		<ProjectsSection />
		<TeamSection />
		<BlogSection />
	</main>
)

export default Home

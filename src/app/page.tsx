import HeroSection from './components/sections/HeroSection/HeroSection'
import AboutSection from './components/sections/AboutSection/AboutSection'
import ServicesSection from './components/sections/ServicesSection/ServicesSection'
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection'
import BlogSection from './components/sections/BlogSection/BlogSection'

const Home: React.FC = () => {
	return (
		<main className='flex-auto'>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<ProjectsSection />
			<BlogSection />
		</main>
	)
}

export default Home

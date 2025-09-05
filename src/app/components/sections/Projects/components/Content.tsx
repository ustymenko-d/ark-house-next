import Link from 'next/link';

import { Banner2, Banner45 } from '@/assets/banner-icons';
import Banner from '@/components/Banner';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/UI/Button';
import { ProjectsDocument, ProjectsQuery } from '@/graphql/generated';
import apolloClient from '@/lib/apolloClient';

import styles from '../Projects.module.css';

const Content = async () => {
	const { data } = await apolloClient.query<ProjectsQuery>({
		query: ProjectsDocument,
		variables: { filters: { recent: { eq: true } } },
	});

	const projects = data?.progects ?? [];

	if (projects.length < 1) return null;

	const firstProjectsGroup = projects.slice(0, 3);
	const secondProjectsGroup = projects.slice(3, 9);
	const lastProjectCase = projects[9];

	return (
		<div className='container mx-auto md:px-10 lg:px-20'>
			<div
				className={`${styles.projectsGrid} mb-14 grid gap-y-12 lg:grid-cols-12 lg:gap-8 2xl:gap-16`}>
				{firstProjectsGroup &&
					firstProjectsGroup.map(
						(projectCase, index) =>
							projectCase && (
								<Link
									className={styles.projectLink}
									key={`${projectCase.title}-${index}`}
									href='/projects/showcase'>
									<ProjectCard {...projectCase} />
								</Link>
							)
					)}

				<Banner
					className={styles.banner}
					svgImage={<Banner45 />}
					topLineText='Yeas of architecture,'
					bottomLineText='planning, design'
				/>

				{secondProjectsGroup.map(
					(projectCase, index) =>
						projectCase && (
							<Link
								className={styles.projectLink}
								key={`${projectCase.title}-${index}`}
								href='/projects/showcase'>
								<ProjectCard {...projectCase} />
							</Link>
						)
				)}

				<Banner
					className={styles.banner}
					svgImage={<Banner2 />}
					topLineText='With over 2.600'
					bottomLineText='projects completed'
				/>

				{lastProjectCase && (
					<Link className={styles.projectLink} href='/projects/showcase'>
						<ProjectCard {...lastProjectCase} />
					</Link>
				)}
			</div>

			<div className='text-center'>
				<p className={`${styles.title} mb-6`}>Start a Project?</p>
				<Button to='/contact'>Contact&nbsp;Us</Button>
			</div>
		</div>
	);
};

export default Content;

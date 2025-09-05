import { ShowcaseDocument, ShowcaseQuery } from '@/graphql/generated';
import apolloClient from '@/lib/apolloClient';

import Gallery from './sections/Gallery';
import Hero from './sections/Hero';

export type SingleProject = NonNullable<
	NonNullable<ShowcaseQuery['progects']>[number]
>;

const Content = async () => {
	const { data } = await apolloClient.query<ShowcaseQuery>({
		query: ShowcaseDocument,
		variables: { filters: { showcase: { eq: true } } },
	});

	const project = data?.progects[0] ?? null;

	if (!project) return <p>Showcase project is unavailable</p>;

	return (
		<>
			<Hero
				title={project.title}
				media={project.media}
				description={project.description}
				info={project.info}
			/>
			<Gallery gallery={project.gallery} />
		</>
	);
};

export default Content;

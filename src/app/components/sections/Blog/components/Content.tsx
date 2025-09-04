import { ArticlesDocument, ArticlesQuery } from '@/graphql/generated';
import apolloClient from '@/lib/apolloClient';

import ArticleItem from './ArticleItem';

const Content = async () => {
	const { data } = await apolloClient.query<ArticlesQuery>({
		query: ArticlesDocument,
	});

	const articles = data?.blogArticles ?? [];

	return (
		<div className='container mx-auto mb-14 grid gap-10 md:px-10 lg:grid-cols-2 lg:px-20 2xl:max-w-screen-xl'>
			{articles.length > 0 ? (
				articles.map(
					(article) =>
						article && <ArticleItem key={article.title} {...article} />
				)
			) : (
				<p>No articles found</p>
			)}
		</div>
	);
};

export default Content;

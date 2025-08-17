'use client';

import AnimatedWrapper from '@/components/AnimatedWrapper';
import ArticleButton from '@/components/ArticleButton';
import ArticleItem from '@/components/ArticleItem';
import Button from '@/components/UI/Button';
import { BLOG_ARTICLES } from '@/const/const';
import { useAppStore } from '@/store';

const Blog = () => {
	const toggleModalOpen = useAppStore((s) => s.toggleModalOpen);

	return (
		<section id='blog' className='mx-auto px-4'>
			<div className='topline container mx-auto mb-10 md:px-10 lg:px-20'>
				<h2 className='font-semibold'>Blog</h2>
				<Button onClick={toggleModalOpen}>Show&nbsp;More</Button>
			</div>

			<div className='container mx-auto mb-14 grid gap-10 md:px-10 lg:grid-cols-2 lg:px-20 2xl:max-w-screen-xl'>
				{BLOG_ARTICLES.map((article, index) => (
					<ArticleButton key={`${article.title}`}>
						<AnimatedWrapper delay={(index + index) * 0.1} className='h-full'>
							<ArticleItem {...article} />
						</AnimatedWrapper>
					</ArticleButton>
				))}
			</div>
		</section>
	);
};

export default Blog;

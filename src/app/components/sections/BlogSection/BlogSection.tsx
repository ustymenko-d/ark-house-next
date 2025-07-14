'use client'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import ArticleButton from '@/components/ArticleButton'
import ArticleItem from '@/components/ArticleItem'
import Button from '@/components/UI/Button/Button'
import { BLOG_ARTICLES } from '@/const/const'
import { useAppStore } from '@/store'

import styles from './BlogSection.module.css'

const BlogSection = () => {
	const toggleModalOpen = useAppStore((s) => s.toggleModalOpen)

	return (
		<section
			id='blog'
			className='px-4 mx-auto'>
			<div className='container mx-auto topline mb-14 md:px-10 lg:px-20'>
				<h2 className='font-semibold leading-tight'>Blog</h2>
				<Button onClick={toggleModalOpen}>Show&nbsp;More</Button>
			</div>

			<div className='container grid gap-10 mx-auto md:px-10 lg:px-20 mb-14 lg:grid-cols-2 2xl:max-w-screen-xl'>
				{BLOG_ARTICLES.map((article, index) => (
					<ArticleButton
						className={styles.button}
						key={`${article.title}`}>
						<AnimatedWrapper delay={(index + index) * 0.1}>
							<ArticleItem {...article} />
						</AnimatedWrapper>
					</ArticleButton>
				))}
			</div>
		</section>
	)
}

export default BlogSection

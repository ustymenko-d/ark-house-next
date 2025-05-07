'use client'

import Button from '@/components/UI/Button/Button'
import ArticleItem from '@/components/ArticleItem/ArticleItem'
import { BLOG_ARTICLES } from '@/const/const'
import { useAppStore } from '@/store/store'
import styles from './BlogSection.module.css'
import ModalButton from '@/components/ModalButton/ModalButton'
import AnimatedWrapper from '@/components/AnimatedWrapper/AnimatedWrapper'

const BlogSection = () => {
	const toggleModalOpen = useAppStore((state) => state.toggleModalOpen)

	return (
		<section
			id='blog'
			className='px-4 mx-auto'>
			<div className='container mx-auto topline mb-14 md:px-10 lg:px-20'>
				<h2 className='font-semibold leading-tight'>Blog</h2>
				<Button onClickProp={toggleModalOpen}>Show&nbsp;More</Button>
			</div>

			<div className='container grid gap-10 mx-auto md:px-10 lg:px-20 mb-14 lg:grid-cols-2 2xl:max-w-screen-xl'>
				{BLOG_ARTICLES.map((article, index) => (
					<ModalButton
						className={styles.button}
						key={`${article.title}`}>
						<AnimatedWrapper delay={(index + index) * 0.1}>
							<ArticleItem article={article} />
						</AnimatedWrapper>
					</ModalButton>
				))}
			</div>
		</section>
	)
}

export default BlogSection

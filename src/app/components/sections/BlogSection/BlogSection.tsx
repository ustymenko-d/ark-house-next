'use client'

import React from 'react'
import Button from '@/components/UI/Button/Button'
import ArticleItem from '@/components/ArticleItem/ArticleItem'
import { BLOG_ARTICLES } from '@/const/const'
import { useAppStore } from '@/store/store'
import styles from './BlogSection.module.css'
import ModalButton from '@/components/ModalButton/ModalButton'

const BlogSection: React.FC = () => {
	const toggleModalOpen = useAppStore((state) => state.toggleModalOpen)

	const handleOpenModal = () => {
		toggleModalOpen()
	}

	return (
		<section
			id='blog'
			className='mx-auto px-4'>
			<div className='topline mb-14 mx-auto container md:px-10 lg:px-20'>
				<h2 className='leading-tight font-semibold'>Blog</h2>
				<Button onClickProp={handleOpenModal}>Show&nbsp;More</Button>
			</div>

			<div className='mx-auto container md:px-10 lg:px-20 mb-14 grid gap-10 lg:grid-cols-2 2xl:max-w-screen-xl'>
				{BLOG_ARTICLES.map((article) => (
					<ModalButton
						classNames={styles.button}
						key={`${article.title}`}>
						<ArticleItem article={article} />
					</ModalButton>
				))}
			</div>
		</section>
	)
}

export default BlogSection

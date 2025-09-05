import { Suspense } from 'react';

import Loader from '@/components/Loader';

import Content from './components/Content';
import HeadButton from './components/HeadButton';

const Blog = () => (
	<section id='blog' className='mx-auto mb-14 px-4'>
		<div className='topline container mx-auto mb-10 md:px-10 lg:px-20'>
			<h2 className='font-semibold'>Blog</h2>
			<HeadButton />
		</div>

		<Suspense fallback={<Loader />}>
			<Content />
		</Suspense>
	</section>
);

export default Blog;

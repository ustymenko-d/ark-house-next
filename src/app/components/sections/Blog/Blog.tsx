import { Suspense } from 'react';

import Content from './components/Content';
import HeadButton from './components/HeadButton';

const Blog = () => (
	<section id='blog' className='mx-auto mb-14 px-4'>
		<div className='topline container mx-auto mb-10 md:px-10 lg:px-20'>
			<h2 className='font-semibold'>Blog</h2>
			<HeadButton />
		</div>

		<Suspense
			fallback={
				<div className='container mx-auto md:px-10 lg:px-20'>
					<p>Loading...</p>
				</div>
			}>
			<Content />
		</Suspense>
	</section>
);

export default Blog;

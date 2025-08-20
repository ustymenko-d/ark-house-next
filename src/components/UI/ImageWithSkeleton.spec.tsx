import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ImageWithSkeleton from './ImageWithSkeleton';

jest.mock('next/image');

describe('ImageWithSkeleton', () => {
	it('renders skeleton during loading and image with opacity-0', () => {
		const { container } = render(
			<ImageWithSkeleton
				src='/test.png'
				alt='Test image'
				width={100}
				height={100}
			/>
		);

		expect(container.querySelector('.animate-pulse')).toBeInTheDocument();

		const img = screen.getByTestId('mocked-image');
		expect(img).toHaveClass('opacity-0');
		expect(img).toHaveAttribute('src', '/test.png');
		expect(img).toHaveAttribute('alt', 'Test image');
		expect(img).toHaveAttribute('width', '100');
		expect(img).toHaveAttribute('height', '100');
	});

	it('hides skeleton and shows image with opacity-100 after load', () => {
		const { container } = render(
			<ImageWithSkeleton
				src='test.png'
				alt='Test image'
				width={100}
				height={100}
			/>
		);
		const img = screen.getByTestId('mocked-image');

		fireEvent.load(img);

		expect(container.querySelector('.animate-pulse')).toBeNull();
		expect(img).toHaveClass('opacity-100');
	});

	it('adds custom className to the container', () => {
		const { container } = render(
			<ImageWithSkeleton
				src='test.png'
				alt='Test image'
				width={100}
				height={100}
				className='custom-wrapper'
			/>
		);

		const wrapper = container.firstChild;
		expect(wrapper).toHaveClass('relative', 'custom-wrapper');
	});
});

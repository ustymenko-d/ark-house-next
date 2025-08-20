import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

jest.mock('next/link');

describe('Button component', () => {
	it('renders a Next.js Link when the "to" prop is provided', () => {
		render(
			<Button to='/about' className='extra-class'>
				Go to About
			</Button>
		);

		const link = screen.getByTestId('mocked-link');
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/about');
		expect(link).toHaveClass('extra-class', 'button-with-icon');
		expect(link).toHaveTextContent('Go to About');
	});

	it('renders a native button when the "to" prop is absent', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click</Button>);

		const button = screen.getByRole('button', { name: 'Click' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('button-with-icon');
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('prioritizes the "to" prop over onClick', () => {
		const handleClick = jest.fn();
		render(
			<Button to='/home' onClick={handleClick}>
				Home
			</Button>
		);

		const link = screen.getByTestId('mocked-link');
		fireEvent.click(link);
		expect(handleClick).not.toHaveBeenCalled();
	});
});

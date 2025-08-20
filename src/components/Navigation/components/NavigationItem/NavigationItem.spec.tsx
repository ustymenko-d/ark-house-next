import { fireEvent, render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import { NavigationLink } from '@/const/const.types';

import NavigationItem from './NavigationItem';

jest.mock('next/navigation', () => ({
	usePathname: jest.fn(),
}));

describe('NavigationItem', () => {
	const mockLink: NavigationLink = {
		title: 'About',
		href: 'about',
	};

	const defaultProps = {
		link: mockLink,
		index: 2,
	};

	it('renders link title', () => {
		(usePathname as jest.Mock).mockReturnValue('/');
		render(<NavigationItem {...defaultProps} />);
		expect(screen.getByText('About')).toBeInTheDocument();
	});

	it('sets correct href when pathname is "/"', () => {
		(usePathname as jest.Mock).mockReturnValue('/');
		render(<NavigationItem {...defaultProps} />);
		expect(screen.getByRole('link')).toHaveAttribute('href', 'about');
	});

	it('sets correct href when pathname is not "/"', () => {
		(usePathname as jest.Mock).mockReturnValue('/blog');
		render(<NavigationItem {...defaultProps} />);
		expect(screen.getByRole('link')).toHaveAttribute('href', '/about');
	});

	it('sets data-number attribute from index', () => {
		(usePathname as jest.Mock).mockReturnValue('/');
		render(<NavigationItem {...defaultProps} />);
		expect(screen.getByRole('link')).toHaveAttribute('data-number', '2');
	});

	it('calls toggleNavListVisible on click if provided', () => {
		const toggleMock = jest.fn();
		(usePathname as jest.Mock).mockReturnValue('/');
		render(
			<NavigationItem {...defaultProps} toggleNavListVisible={toggleMock} />
		);
		fireEvent.click(screen.getByRole('link'));
		expect(toggleMock).toHaveBeenCalledTimes(1);
	});

	it('does not throw if toggleNavListVisible is undefined', () => {
		(usePathname as jest.Mock).mockReturnValue('/');
		render(<NavigationItem {...defaultProps} />);
		expect(() => fireEvent.click(screen.getByRole('link'))).not.toThrow();
	});
});

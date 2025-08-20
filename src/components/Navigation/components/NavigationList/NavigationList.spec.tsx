import { render, screen } from '@testing-library/react';

import { NAVIGATION_LINKS } from '@/const/const';
import { expectBreakpoint } from '@/hooks/useBreakpoints.spec';

import NavigationList from './NavigationList';

describe('NavigationList', () => {
	it('renders with default props', () => {
		render(<NavigationList />);
		const list = screen.getByTestId('navigation-list');
		expect(list).toBeInTheDocument();
		expect(list).toHaveAttribute('id', 'footer-navigation-list');
	});

	it('sets correct id when header is true', () => {
		render(<NavigationList header />);
		const list = screen.getByTestId('navigation-list');
		expect(list).toHaveAttribute('id', 'navigation-list');
	});

	it('sets aria-hidden when isMobile and navListVisible is false', () => {
		expectBreakpoint(640, 0);

		render(<NavigationList navListVisible={false} />);
		const list = screen.getByTestId('navigation-list');
		expect(list).toHaveAttribute('aria-hidden', 'true');
	});

	it('doesnʼt set aria-hidden when not mobile', () => {
		expectBreakpoint(1024, 1);

		render(<NavigationList navListVisible={false} />);
		const list = screen.getByTestId('navigation-list');
		expect(list).not.toHaveAttribute('aria-hidden', 'true');
	});

	it('applies active classes when navListVisible is true', () => {
		render(<NavigationList navListVisible />);
		const list = screen.getByTestId('navigation-list');
		expect(list.className).toMatch('visible max-md:left-0');
	});

	it('renders all navigation items', () => {
		render(<NavigationList />);
		NAVIGATION_LINKS.forEach((link) => {
			const item = screen.getByText(link.title);
			expect(item).toBeInTheDocument();
		});
	});
});

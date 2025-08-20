import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import { expectBreakpoint } from '@/hooks/useBreakpoints.spec';
import { scrollToMock } from '../../../__mocks__/lenis/react';

import Navigation from './Navigation';

const getToggler = () => screen.queryByTestId('navigation-toggler');
const getNavList = () => screen.queryByTestId('navigation-list');

describe('NavigationList', () => {
	describe('Toggler behavior', () => {
		it('shows on screen < 768px', () => {
			expectBreakpoint(640, 0);
			render(<Navigation />);
			expect(getToggler()).toBeInTheDocument();
		});

		it('doesnʼt show toggler on screen >=768px', () => {
			expectBreakpoint(1024, 1);
			render(<Navigation />);
			expect(getToggler()).not.toBeInTheDocument();
		});
	});

	describe('Toggle behavior on mobile', () => {
		let toggler: HTMLElement;

		beforeEach(() => {
			resizeWindow(640);
			render(<Navigation />);
			toggler = getToggler()!;
		});

		it('toggles navigation visibility when clicking the toggler', () => {
			const navList = getNavList();

			expect(toggler).toHaveAttribute('aria-expanded', 'false');
			expect(navList).toHaveAttribute('aria-hidden', 'true');

			fireEvent.click(toggler);
			expect(toggler).toHaveAttribute('aria-expanded', 'true');
			expect(navList).toHaveAttribute('aria-hidden', 'false');

			fireEvent.click(toggler);
			expect(toggler).toHaveAttribute('aria-expanded', 'false');
			expect(navList).toHaveAttribute('aria-hidden', 'true');
		});

		it('closes navigation when Escape key is pressed', () => {
			const navList = getNavList();

			fireEvent.click(toggler);
			expect(navList).toHaveAttribute('aria-hidden', 'false');

			fireEvent.keyDown(document, { key: 'Escape' });
			expect(navList).toHaveAttribute('aria-hidden', 'true');
		});

		it('calls lenis.scrollTo when opening navigation', () => {
			fireEvent.click(toggler);

			expect(scrollToMock).toHaveBeenCalledTimes(1);
			expect(scrollToMock).toHaveBeenCalledWith(0, { duration: 1 });
		});
	});
});

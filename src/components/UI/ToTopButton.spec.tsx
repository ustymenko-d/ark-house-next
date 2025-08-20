import { act, fireEvent, render, screen } from '@testing-library/react';

import ToTopButton from './ToTopButton';

jest.mock('lenis/react');
jest.mock('@/hooks/useScrollBeyondThreshold', () => ({
	__esModule: true,
	default: jest.fn(),
}));
jest.mock('@/components/AnimatedWrapper', () => ({
	__esModule: true,
	default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
jest.mock('framer-motion', () => ({
	AnimatePresence: ({ children }: { children: React.ReactNode }) => (
		<>{children}</>
	),
}));

import useScrollBeyondThreshold from '@/hooks/useScrollBeyondThreshold';
import { scrollToMock } from '../../../__mocks__/lenis/react';

jest.useFakeTimers();

describe('ToTopButton', () => {
	const renderButton = () => render(<ToTopButton />);
	const getButton = () =>
		screen.queryByRole('button', {
			name: /scroll to top/i,
		}) as HTMLButtonElement;

	it('doesnʼt render the button if scroll has not exceeded the threshold', () => {
		(useScrollBeyondThreshold as jest.Mock).mockReturnValue(false);
		renderButton();
		expect(getButton()).toBeNull();
	});

	it('renders the button if scroll has exceeded the threshold', () => {
		(useScrollBeyondThreshold as jest.Mock).mockReturnValue(true);
		renderButton();

		const button = getButton();
		expect(button).toBeInTheDocument();
		expect(button).not.toBeDisabled();
	});

	it('calls scrollTo and disables the button for 1 second after click', () => {
		(useScrollBeyondThreshold as jest.Mock).mockReturnValue(true);
		renderButton();

		const button = getButton();
		fireEvent.click(button);

		expect(scrollToMock).toHaveBeenCalledWith(0, { duration: 1 });
		expect(button).toBeDisabled();

		act(() => {
			jest.advanceTimersByTime(1000);
		});

		expect(button).not.toBeDisabled();
	});
});

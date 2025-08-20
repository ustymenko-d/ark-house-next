import '@testing-library/jest-dom';

global.resizeWindow = (width: number) => {
	Object.defineProperty(window, 'innerWidth', {
		writable: true,
		configurable: true,
		value: width,
	});
	window.dispatchEvent(new Event('resize'));
};

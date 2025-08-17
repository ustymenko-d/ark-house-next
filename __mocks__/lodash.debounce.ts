const debounce = (fn: (...args: unknown[]) => unknown) => {
	const debounced = (...args: unknown[]) => fn(...args);
	debounced.cancel = jest.fn();
	return debounced;
};

export default debounce;

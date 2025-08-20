export const scrollToMock = jest.fn();

export const useLenis = () => ({
	scrollTo: scrollToMock,
});

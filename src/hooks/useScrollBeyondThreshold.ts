'use client';

import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

const useScrollBeyondThreshold = (
	thresholdPercent: number = 100,
	debounceDelay: number = 200
) => {
	const [hasScrolledBeyondThreshold, setHasScrolledBeyondThreshold] =
		useState(false);

	useEffect(() => {
		const thresholdInPixels = window.innerHeight * (thresholdPercent / 100);

		const handleScroll = debounce(() => {
			setHasScrolledBeyondThreshold(window.scrollY > thresholdInPixels);
		}, debounceDelay);

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			handleScroll.cancel();
		};
	}, [thresholdPercent, debounceDelay]);

	return hasScrolledBeyondThreshold;
};

export default useScrollBeyondThreshold;

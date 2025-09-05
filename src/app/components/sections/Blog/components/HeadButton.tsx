'use client';

import Button from '@/components/UI/Button';
import { useAppStore } from '@/store';

const HeadButton = () => {
	const toggleModalOpen = useAppStore((s) => s.toggleModalOpen);

	return <Button onClick={toggleModalOpen}>Show&nbsp;More</Button>;
};

export default HeadButton;

'use client';

import { useRef } from 'react';
import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';

interface IAnimatedWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	motionKey?: string;
	delay?: number;
	duration?: number;
	typeFade?: boolean;
}

const AnimatedWrapper = ({
	children,
	motionKey,
	delay = 0,
	duration = 0.4,
	typeFade = true,
	className,
}: IAnimatedWrapperProps) => {
	const motionRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(motionRef, { once: true });

	const fadeInBottom = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const opacityScale = {
		hidden: { opacity: 0, scale: 0.98 },
		visible: { opacity: 1, scale: 1 },
	};

	return (
		<motion.div
			key={motionKey}
			className={clsx(className)}
			ref={motionRef}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			exit='hidden'
			variants={typeFade ? fadeInBottom : opacityScale}
			transition={{ duration, ease: 'easeOut', delay }}>
			{children}
		</motion.div>
	);
};

export default AnimatedWrapper;

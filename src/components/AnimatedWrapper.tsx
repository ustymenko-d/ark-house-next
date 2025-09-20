'use client';

import { useRef } from 'react';
import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	motionKey?: string;
	delay?: number;
	duration?: number;
	variant?: keyof typeof variants;
}

const variants = {
	slideInBottom: {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	},
	opacityScale: {
		hidden: { opacity: 0, scale: 0.98 },
		visible: { opacity: 1, scale: 1 },
	},
};

const AnimatedWrapper = ({
	children,
	motionKey,
	delay = 0,
	duration = 0.4,
	variant = 'slideInBottom',
	className,
}: Props) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true });
	const selectedVariant = variants[variant] ?? variants.slideInBottom;

	const shouldAnimate = isInView ? 'visible' : 'hidden';

	return (
		<motion.div
			key={motionKey}
			className={clsx(className)}
			ref={ref}
			initial='hidden'
			animate={shouldAnimate ? 'visible' : 'hidden'}
			exit='hidden'
			variants={selectedVariant}
			transition={{ duration, ease: 'easeOut', delay }}>
			{children}
		</motion.div>
	);
};

export default AnimatedWrapper;

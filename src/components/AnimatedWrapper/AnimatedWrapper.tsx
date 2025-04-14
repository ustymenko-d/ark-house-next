'use client'

import { motion, useInView } from 'framer-motion'
import { FC, ReactNode, useRef } from 'react'

type AnimatedWrapperProps = {
	children: ReactNode
	motionKey: string
	delay?: number
	duration?: number
	typeFade?: boolean
	additionalClasses?: string
}

const AnimatedWrapper: FC<AnimatedWrapperProps> = ({
	children,
	motionKey,
	delay = 0,
	duration = 0.4,
	typeFade = true,
	additionalClasses,
}) => {
	const motionRef = useRef<HTMLDivElement | null>(null)
	const isInView = useInView(motionRef, { once: true })

	const fadeInBottom = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	}

	const opacityScale = {
		hidden: { opacity: 0, scale: 0.98 },
		visible: { opacity: 1, scale: 1 },
	}

	return (
		<motion.div
			key={motionKey}
			className={additionalClasses ? `h-full ${additionalClasses}` : 'h-full'}
			ref={motionRef}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			exit='hidden'
			variants={typeFade ? fadeInBottom : opacityScale}
			transition={{ duration, ease: 'easeOut', delay }}>
			{children}
		</motion.div>
	)
}

export default AnimatedWrapper

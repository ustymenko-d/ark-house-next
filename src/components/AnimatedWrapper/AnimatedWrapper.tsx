'use client'

import { motion, useInView } from 'framer-motion'
import { FC, ReactNode, useRef } from 'react'

type AnimatedWrapperProps = {
	children: ReactNode
	delay?: number
}

const AnimatedWrapper: FC<AnimatedWrapperProps> = ({ children, delay = 0 }) => {
	const motionRef = useRef<HTMLDivElement | null>(null) // Реф для відслідковування елемента
	const isInView = useInView(motionRef, { once: true })

	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<motion.div
			ref={motionRef}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			exit='hidden'
			variants={variants}
			transition={{ duration: 0.5, ease: 'easeOut', delay }}>
			{children}
		</motion.div>
	)
}

export default AnimatedWrapper

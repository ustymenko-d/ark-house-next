import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2048, 3840],
		formats: ['image/avif', 'image/webp'],
	},
}

export default nextConfig

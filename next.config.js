/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
};

module.exports = nextConfig;

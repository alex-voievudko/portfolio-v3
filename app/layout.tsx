import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Roboto_Mono } from 'next/font/google';
import { CursorProvider } from '@app/components/cursor';

const poppins = Poppins({
	display: 'swap',
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

const robotoMono = Roboto_Mono({
	display: 'swap',
	weight: ['400', '500', '600'],
	subsets: ['latin'],
	variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
	title: 'Portfolio - Alex Voievudko',
	description:
		"Experienced front-end software engineer with a passion for building accessible and user-friendly web products. I'm dedicated to creating elegant solutions that enhance the user experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} ${robotoMono.variable}`}>
				<CursorProvider>{children}</CursorProvider>
			</body>
		</html>
	);
}

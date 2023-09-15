'use client';
import React, { useState } from 'react';
import { animated, useSprings, config } from '@react-spring/web';
import { NavigationItem } from '@app/components/nav-item';

const navigation = [
	{ name: 'About', href: '#about' },
	{ name: 'Experience', href: '#experience' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Recommendations', href: '#recommendations' },
];

export const Navigation = () => {
	const [active, setActive] = useState<number | null>(null);

	const springs = useSprings(
		navigation.length,
		navigation.map((_, index) => ({
			from: { opacity: 0, transform: 'translateX(-20px)' },
			to: { opacity: 1, transform: 'translateX(0)' },
			config: config.gentle,
			delay: 200 * index,
		})),
	);

	return (
		<nav className='hidden lg:block'>
			<div className='mt-16 flex flex-col font-roboto lowercase gap-4'>
				{springs.map((style, index) => (
					<animated.div key={index} style={style}>
						<NavigationItem
							href={navigation[index].href}
							index={index}
							name={navigation[index].name}
							active={active === index}
							onClick={setActive}
						/>
					</animated.div>
				))}
			</div>
		</nav>
	);
};

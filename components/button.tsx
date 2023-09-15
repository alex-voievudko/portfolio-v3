'use client';
import React from 'react';
import { useCursorContext } from '@app/hooks/useCursorContext';

type Props = {
	href: string;
	className?: string;
	children: React.ReactNode;
};

export const Button = ({ href, className, children }: Props) => {
	const { onCursor } = useCursorContext();

	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={`${className} inline-block px-4 py-2 w-fit text-sm font-medium leading-5 text-card transition duration-300 ease-in-out bg-primary border border-transparent rounded-full lg:hover:bg-[#e88e0b] focus:outline-none focus:border-[#ffaa3e]  active:bg-[#d17900]`}
			onMouseEnter={onCursor}
			onMouseLeave={onCursor}
		>
			{children}
		</a>
	);
};

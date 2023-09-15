'use client';
import React from 'react';
import { animated, useSprings, config } from '@react-spring/web';
import { FaInstagram, FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useCursorContext } from '@app/hooks/useCursorContext';

const social = [
	{
		name: 'Github',
		url: 'https://github.com/alex-voievudko',
		icon: <FaGithub size={24} />,
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/alex-voievudko/',
		icon: <FaLinkedin size={24} />,
	},
	{
		name: 'Telegram',
		url: 'https://t.me/alex_voievudko',
		icon: <FaTelegram size={24} />,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/alex.voievudko/',
		icon: <FaInstagram size={24} />,
	},
];

export const Social = () => {
	const { onCursor } = useCursorContext();

	const springs = useSprings(
		social.length,
		social.map((_, index) => ({
			from: { opacity: 0, transform: 'translateY(-20px)' },
			to: { opacity: 1, transform: 'translateY(0)' },
			config: config.wobbly,
			delay: 200 * index,
		})),
	);

	return (
		<div className='flex gap-5'>
			{springs.map((style, index) => (
				<animated.a
					key={social[index].name}
					href={social[index].url}
					target='_blank'
					rel='noreferrer'
					className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 focus-visible:bg-white/20 transition-colors duration-300'
					style={style}
					onMouseEnter={onCursor}
					onMouseLeave={onCursor}
					aria-label={social[index].name}
				>
					{social[index].icon}
				</animated.a>
			))}
		</div>
	);
};

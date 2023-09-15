'use client';
import React from 'react';
import Image from 'next/image';
import { useCursorContext } from '@app/hooks/useCursorContext';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

type Props = {
	name: string;
	avatar: string;
	company: string;
	role: string;
	linkedIn: string;
	text: string;
};

export const RecommendationItem = ({ name, avatar, company, role, linkedIn, text }: Props) => {
	const { onCursor } = useCursorContext();

	return (
		<li key={name}>
			<div
				onMouseEnter={onCursor}
				onMouseLeave={onCursor}
				className='group rounded grid lg:p-4 transition duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:bg-card/40 lg:hover:shadow-neutral-900/50 lg:hover:drop-shadow-md lg:group-hover/list:opacity-50'
			>
				<div
					className='hidden sm:visible mb-2 mt-1 sm:col-span-2 sm:flex sm:justify-center'
					aria-label={`${name} - ${role}`}
				>
					<div className='w-12 h-12 overflow-hidden rounded-full border-2 border-white/10 p-1 lg:group-hover:border-primary lg:transition lg:duration-300'>
						<Image className='rounded-full' src={avatar} alt={name} width={48} height={48} quality={100} priority />
					</div>
				</div>
				<div className='sm:col-span-6'>
					<div className='flex gap-3 sm:block'>
						<div className='w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/10 p-1 sm:hidden'>
							<Image className='rounded-full ' src={avatar} alt={name} width={48} height={48} quality={100} priority />
						</div>
						<h3 className='font-medium leading-snug text-white mb-2'>
							<a
								className='inline-flex items-center font-medium leading-tight text-white hover:text-primary focus-visible:text-primary transition duration-300 group/link text-lg'
								href={linkedIn}
								target='_blank'
								rel='noreferrer'
								aria-label={name}
							>
								{name} · {company} <FaArrowUpRightFromSquare className='inline-block ml-2 text-xs' />
							</a>
							<div
								className='mb-2 mt-1 text-xs font-semibold capitalise tracking-wide text-white/50 sm:col-span-2'
								aria-label={role}
							>
								{role}
							</div>
						</h3>
					</div>
					<p className='text-sm leading-normal mb-2'>{text}</p>
				</div>
			</div>
		</li>
	);
};

'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useCursorContext } from '@app/hooks/useCursorContext';
import { animated, useTransition } from '@react-spring/web';
import { FaRegCircleXmark } from 'react-icons/fa6';

type Props = {
	image: string | null;
	visible: boolean;
	onClose: () => void;
};

export const PreviewModal = ({ image, visible, onClose }: Props) => {
	const { onCursor } = useCursorContext();
	const [mounted, setMounted] = useState(false);

	const transition = useTransition(visible, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	const imageTransition = useTransition(image, {
		from: { opacity: 0, transform: 'scale(0)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(0)' },
	});

	// disable scrolling when modal is open
	useEffect(() => {
		if (visible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [visible]);

	// check if mounted to crete portal
	useEffect(() => {
		setMounted(true);
	}, []);

	const Modal = transition(
		(style, item) =>
			item && (
				<animated.div
					style={style}
					className='fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur'
					onClick={onClose}
				>
					<div className='relative w-full max-w-4xl max-h-[90vh]'>
						{image &&
							imageTransition(
								(style, item) =>
									item && (
										<animated.div style={style} className='relative w-full max-w-4xl max-h-[90vh]'>
											<Image className='rounded' src={image} alt='Preview' width={1280} height={720} loading='lazy' />
										</animated.div>
									),
							)}
					</div>

					<button
						className='absolute top-0 right-0 p-4 text-white hover:text-primary focus-visible:text-primary transition duration-300'
						onClick={onClose}
						aria-label='Close'
						onMouseEnter={onCursor}
						onMouseLeave={onCursor}
					>
						<FaRegCircleXmark className='inline-block' size={24} />
					</button>
				</animated.div>
			),
	);

	return mounted ? createPortal(Modal, document.body) : null;
};

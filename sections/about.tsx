import React from 'react';
import { Button } from '@app/components/button';
import about from '@app/data/about.json';

export const AboutSection = () => {
	const paragraphs = about.text.split('\n');

	return (
		<section id='about' aria-label='Aboout Me' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
			<div className='sticky top-0 z-25 -mx-6  w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
				<h2 className='text-lg text-secondary font-extrabold uppercase tracking-widest lg:sr-only'>About</h2>
			</div>
			<div className='lg:px-4 mt-4'>
				{paragraphs.map((paragraph, index) => (
					<p key={`${paragraph.slice(0, 5)}-${index}`} className=' mb-2'>
						{paragraph}
					</p>
				))}

				<Button href='/resume.pdf' className='mt-3'>
					Download Resume
				</Button>
			</div>
		</section>
	);
};

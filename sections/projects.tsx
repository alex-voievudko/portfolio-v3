import React from 'react';
import { ProjectsList } from '@app/components/projects-list';

export const ProjectsSection = () => {
	return (
		<section id='projects' aria-label='Projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
			<div className='sticky z-50 top-0 -mx-6 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-4 lg:py-0 lg:bg-transparent lg:blur-none'>
				<h2 className='text-lg text-secondary font-extrabold lg:font-semibold uppercase tracking-widest'>Projects</h2>
			</div>
			<div className='mt-4'>
				<ProjectsList />
			</div>
		</section>
	);
};

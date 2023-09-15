'use client';
import React from 'react';
import projects from '@app/data/projects.json';
import { ProjectItem } from '@app/components/project-item';
import { PreviewModal } from '@app/components/preview-modal';

export const ProjectsList = () => {
	const [preview, setPreview] = React.useState<string | null>(null);

	return (
		<>
			<ul className='group/list flex flex-col gap-12'>
				{projects.map((project) => (
					<ProjectItem
						key={project.title}
						title={project.title}
						description={project.description}
						preview={project.preview}
						github={project.github}
						live={project.live}
						technologies={project.technologies}
						onImageClick={(image) => setPreview(image)}
					/>
				))}
			</ul>

			<PreviewModal image={preview} visible={preview !== null} onClose={() => setPreview(null)} />
		</>
	);
};

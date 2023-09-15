import React from 'react';
import { JobItem } from '@app/components/job-item';
import { Button } from '@app/components/button';
import jobs from '@app/data/jobs.json';

export const Jobs = () => {
	return (
		<ul className='group/list flex flex-col gap-12'>
			{jobs.map((job) => (
				<JobItem
					key={job.title}
					date={job.date}
					title={job.title}
					company={job.company}
					companyLink={job.companyLink}
					description={job.description}
					technologies={job.technologies}
				/>
			))}
			<div className='lg:p-4 flex w-full sm:justify-end'>
				<Button href='https://drive.google.com/file/d/1v6zQ4gX3ZnYh4q9fZQb3LkYxjO7pZc3H/view?usp=sharing'>
					View Full Resume
				</Button>
			</div>
		</ul>
	);
};

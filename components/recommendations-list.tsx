import React from 'react';
import { RecommendationItem } from '@app/components/recommendation-item';
import recommendations from '@app/data/recommendations.json';

export const RecommendationsList = () => {
	return (
		<ul className='group/list flex flex-col gap-12'>
			{recommendations.map((rec, index) => (
				<RecommendationItem
					key={rec.name}
					name={rec.name}
					avatar={rec.avatar}
					company={rec.company}
					role={rec.role}
					linkedIn={rec.linkedIn}
					text={rec.text}
				/>
			))}
		</ul>
	);
};

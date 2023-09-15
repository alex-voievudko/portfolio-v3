import React from 'react';

type Props = {
	technology: string;
};

export const Chip = ({ technology }: Props) => {
	return (
		<li>
			<div className='flex items-center font-roboto font-medium rounded-full bg-secondary/10 px-3 py-1 text-xs leading-5 text-secondary '>
				{technology}
			</div>
		</li>
	);
};

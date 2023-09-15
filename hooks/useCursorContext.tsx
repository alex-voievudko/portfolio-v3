import React, { useContext } from 'react';
import { CursorContext } from '@app/components/cursor';

export const useCursorContext = () => {
	const context = useContext(CursorContext);
	if (!context) {
		throw new Error('useCursorContext must be used within a CursorProvider');
	}
	return context;
};

import React from 'react';

// TODO: fix console.log
export const linesBreak = (quote: string) => {
	return quote.split('\n').map((line, index) => {
		return (
			<React.Fragment key={index}>
				{line.trim()}
				{index !== quote.split('\n').length - 1 && (
					<p>
						<br />
					</p>
				)}
			</React.Fragment>
		);
	});
};

import React from 'react';

const Loading = () => {
	return (
		<div className='Loading'>
			<i className="fa fa-circle-o-notch fa-spin fa-5x fa-fw"></i>
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default Loading;
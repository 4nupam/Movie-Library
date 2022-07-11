import React from 'react';

const MovieCards = (props) => {
	return(
	<div className="my-4">
		<div> <img src={props.poster} className="w-[250px] h-[400px]" alt="poster" /> </div>
		<div className="text-3xl font-semibold w-[250px] text-center"> {props.title} </div>
		<div className="text-sm w-[250px] text-center"> {props.brief} </div>
	</div>
	);
}

export default MovieCards;
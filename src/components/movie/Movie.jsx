import React from 'react';
import MovieCards from './MovieCards';

const Movie = () => {
	return(
	<div className="grid grid-cols-3 gap-4 justify-items-center">
		<MovieCards poster="images/poster.jpg" title="AVATAR" brief="Avatar is a 2009 American epic science fiction film. It is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora." />
		<MovieCards poster="images/poster.jpg" title="AVATAR" brief="Avatar is a 2009 American epic science fiction film. It is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora." />
		<MovieCards poster="images/poster.jpg" title="AVATAR" brief="Avatar is a 2009 American epic science fiction film. It is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora." />
		<MovieCards poster="images/poster.jpg" title="AVATAR" brief="Avatar is a 2009 American epic science fiction film. It is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora." />
	</div>
	);
}

export default Movie;
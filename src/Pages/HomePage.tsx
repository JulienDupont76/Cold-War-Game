// create home page with play button
//

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resetGameState } from '../utils/USA/main';

export const HomePage = () => {
	useEffect(() => resetGameState(), []);

	return (
		<div className='w-screen flex flex-col justify-start items-center gap-6 py-20'>
			<div className='flex flex-col items-center'>
				<div className='text-4xl sm:text-7xl text-white'>Cold War Game</div>
				<p className='my-2 text-xs sm:text-sm text-center text-white'>
					created by Léo Blancher, Julien Dupont, Viet Hung Nguyen
				</p>
			</div>
			<div className='w-9/12 text-base sm:text-xl text-white'>
				Step into the shoes of a leader during the Cold War era and shape the
				destiny of your nation in this thrilling, strategic game. Will you guide
				the United States or the USSR through the tumultuous years of the Cold
				War? Make critical decisions in science, military power, economy,
				culture, and popularity, as you strive to outmaneuver your opponent and
				lead your nation to victory. The fate of the world is in your hands.
				Choose wisely and prove that you have what it takes to dominate the Cold
				War era. Are you ready to rewrite history?
			</div>
			<div className='text-base sm:text-xl text-white'>
				Select the nation you want to play :
			</div>
			<div className='w-full h-full flex justify-around items-center'>
				<Link to='/Cold-War-Game/USA'>
					<img
						src='/Cold-War-Game/USA_flag.png'
						alt='USA Flag'
						className='h-20 xl:h-80 lg:h-48 md:h-48 sm:h-32 transition duration-300 transform hover:scale-110 hover:shadow-2xl'
					/>
				</Link>
				<Link to='/Cold-War-Game/USSR'>
					<img
						src='/Cold-War-Game/USSR_flag.png'
						alt='USSR Flag'
						className='h-20 xl:h-80 lg:h-48 md:h-48 sm:h-32 transition duration-300 transform hover:scale-110 hover:shadow-2xl'
					/>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;

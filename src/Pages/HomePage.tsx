// create home page with play button
//

import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-start items-center gap-24 py-20'>
			<div className='text-4xl sm:text-6xl text-white'>Cold War Game</div>
			<div className='w-9/12 text-base sm:text-xl text-white'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
				iure perspiciatis tempora illo, dolores dolorem labore cumque deserunt
				fugit aspernatur ullam totam eos quia ipsa reiciendis pariatur provident
				est odio.
			</div>
			<div className='text-base sm:text-xl text-white'>
				Select the nation you want to play :
			</div>
			<div className='w-full h-full flex justify-around items-center'>
				<Link to='/USA'>
					<img
						src='/USA_flag.png'
						alt='USA Flag'
						className='h-20 xl:h-80 lg:h-48 md:h-48 sm:h-32 transition duration-300 transform hover:scale-110 hover:shadow-2xl'
					/>
				</Link>
				<Link to='/USSR'>
					<img
						src='/USSR_flag.png'
						alt='USSR Flag'
						className='h-20 xl:h-80 lg:h-48 md:h-48 sm:h-32 transition duration-300 transform hover:scale-110 hover:shadow-2xl'
					/>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;

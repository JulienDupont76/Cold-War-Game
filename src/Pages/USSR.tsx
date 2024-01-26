import { useEffect, useState } from 'react';
import Dialog from '../components/Dialog';
import { GameState, selectOptions, showTextNode } from '../utils/USSR/main';
import { Link } from 'react-router-dom';
import Settings from '../components/Settings';
import { Option } from '../utils/USA/story';
import Progress from '../components/Progress';
import * as DialogRadix from '@radix-ui/react-dialog';

export const Ussr = () => {
	const [text, setText] = useState<string | undefined>('');
	const [defeated, setDefeated] = useState<boolean>(false);
	const [win, setWin] = useState<boolean>(false);
	const [options, setOptions] = useState<Option[]>([]);
	const [gameState, setGameState] = useState<GameState>({
		military: 50,
		science: 50,
		economy: 50,
		culture: 50,
	});

	useEffect(() => {
		const {
			text: newText,
			options: newOptions,
			Gamestate: newState,
		} = showTextNode(1);
		if (newText) setText(newText);
		if (newOptions) setOptions(newOptions);
		if (newState) setGameState(newState);
	}, []);

	const handleOptionClick = (option: Option) => {
		const nextTextNodeIndex = selectOptions(option);
		const {
			text: newText,
			options: newOptions,
			Gamestate: newState,
		} = showTextNode(nextTextNodeIndex);
		if (newText) setText(newText);
		if (newOptions) setOptions(newOptions);
		if (newState) setGameState(newState);
		if (
			newState.culture <= 0 ||
			newState.economy <= 0 ||
			newState.military <= 0 ||
			newState.science <= 0
		) {
			setDefeated(true);
		}
		if (
			newState.culture >= 100 ||
			newState.economy >= 100 ||
			newState.military >= 100 ||
			newState.science >= 100
		) {
			setWin(true);
		}
	};

	return (
		<div className='back'>
			<div className='bg-USSR'></div>
			<Dialog
				text={text}
				options={options}
				handleOptionClick={handleOptionClick}
			/>
			<Link
				to='/Cold-War-Game'
				className='fixed bottom-8 left-8 inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'
			>
				<i className='ri-home-2-line'></i>
			</Link>
			<Settings />
			<Progress state={gameState} />
			<DialogRadix.Root open={defeated}>
				<DialogRadix.Overlay className='w-screen h-screen bg-black/80 backdrop-blur fixed top-0 left-0' />
				<DialogRadix.Content className='fixed top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 w-[500px] outline-none flex flex-col justify-between items-center gap-4'>
					<h2 className='text-2xl font-bold mb-4 text-red-600'>Game Over</h2>
					<p className='text-lg text-center mb-4 text-white '>
						Your nation has faced defeat due to the consequences of your
						choices. The people and the world look to you for leadership.
						Reevaluate your decisions and try again to find the right path to
						save your nation, your people, and the world.
					</p>
					<Link
						to='/Cold-War-Game'
						className='shadow-black hover:bg-blue-300 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none'
					>
						Retry
					</Link>
				</DialogRadix.Content>
			</DialogRadix.Root>
			<DialogRadix.Root open={win}>
				<DialogRadix.Overlay className='w-screen h-screen bg-black/80 backdrop-blur fixed top-0 left-0' />
				<DialogRadix.Content className='fixed top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 w-[500px] outline-none flex flex-col justify-between items-center gap-4'>
					<h2 className='text-2xl font-bold mb-4 text-blue-500'>
						Victory Achieved
					</h2>
					<p className='text-lg text-center mb-4 text-white '>
						The USSR has triumphed thanks to your strategic decisions and
						leadership. The people and the world look to you as a beacon of
						success. Continue on this path to secure the prosperity of your
						nation, your people, and the world.
					</p>
					<Link
						to='/Cold-War-Game'
						className='shadow-black hover:bg-green-300 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none'
					>
						Continue
					</Link>
				</DialogRadix.Content>
			</DialogRadix.Root>
		</div>
	);
};

export default Ussr;

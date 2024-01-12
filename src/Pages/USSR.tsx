import { useEffect, useState } from 'react';
import Dialog from '../components/Dialog';
import { GameState, selectOptions, showTextNode } from '../utils/USSR/main';
import { Link } from 'react-router-dom';
import Settings from '../components/Settings';
import { Option } from '../utils/USA/story';
import Progress from '../components/Progress';

export const USSR = () => {
	const [text, setText] = useState<string | undefined>('Test');
	const [options, setOptions] = useState<Option[]>([]);
	const [gameState, setGameState] = useState<GameState>({
		military: 50,
		science: 50,
		economy: 50,
	});

	useEffect(() => {
		const {
			text: newText,
			options: newOptions,
			Gamestate: newState,
		} = showTextNode(1);
		if (newText) setText(newText);
		if (newOptions) setOptions(newOptions);
		console.log(newState);
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
				to='/'
				className='fixed bottom-8 left-8 inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'
			>
				<i className='ri-home-2-line'></i>
			</Link>
			<Settings />
			<Progress state={gameState} />
		</div>
	);
};

export default USSR;

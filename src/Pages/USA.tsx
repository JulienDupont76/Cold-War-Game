// create home page with play button
//

import { useEffect, useState } from 'react';
import './USA.css';
import Dialog from '../components/Dialog';
import { selectOptions, showTextNode } from '../utils/main';
import { Link } from 'react-router-dom';
import Settings from '../components/Settings';
import { Option } from '../utils/story';

export const USA = () => {
	const [text, setText] = useState<string | undefined>('Test');
	const [options, setOptions] = useState<Option[]>([]);

	useEffect(() => {
		const { text: newText, options: newOptions } = showTextNode(1);
		if (newText) setText(newText);
		if (newOptions) setOptions(newOptions);
	}, []);

	const handleOptionClick = (option: Option) => {
		const nextTextNodeIndex = selectOptions(option);
		const { text: newText, options: newOptions } =
			showTextNode(nextTextNodeIndex);
		if (newText) setText(newText);
		if (newOptions) setOptions(newOptions);
	};

	return (
		<div className='back'>
			<div className='bg'></div>
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
		</div>
	);
};

export default USA;

import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import { selectOptions, showTextNode } from './utils/main';

function App() {
	const [text, setText] = useState<string | undefined>('Test');
	const [options, setOptions] = useState([]);

	useEffect(() => {
		const { text: newText, options: newOptions } = showTextNode(1);
		if (newText) setText(newText);
		if (newOptions) setOptions(newOptions);
	}, []);

	const handleOptionClick = (option) => {
		const nextTextNodeIndex = selectOptions(option);
		const { text: newText, options: newOptions } =
			showTextNode(nextTextNodeIndex);
		console.log(newOptions);
		if (newText) setText(newText);
		if (newOptions) setOptions(newOptions);
	};

	return (
		<div className='back'>
			<div className='bg'></div>
			<Button
				text={text}
				options={options}
				handleOptionClick={handleOptionClick}
			/>
		</div>
	);
}

export default App;

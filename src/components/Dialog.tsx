import TypeWriter from './TypeWriter';
import { Option } from '../utils/USA/story';
import { useEffect, useState } from 'react';

type DialogProps = {
	text: string | undefined;
	options: Option[];
	handleOptionClick: (option: Option) => void;
};

const Dialog = (props: DialogProps) => {
	const { text, options, handleOptionClick } = props;

	const [showAnswers, setShowAnswers] = useState<boolean>(true);
	const [optionsToShow, setOptionsToShow] = useState<number>(0);

	useEffect(() => {
		if (text !== undefined && text.length > 0) {
			setShowAnswers(false);
			setOptionsToShow(0);
		}
	}, [text]);

	useEffect(() => {
		setOptionsToShow(0);
		let counter = 0;
		const interval = setInterval(() => {
			if (counter < 4) {
				setOptionsToShow((prev) => prev + 1);
				counter++;
			} else {
				clearInterval(interval);
			}
		}, 500);

		return () => {
			clearInterval(interval);
		};
	}, [showAnswers]);

	return (
		<div className='container'>
			<TypeWriter
				text={text}
				delay={80}
				onComplete={() => setShowAnswers(true)}
			/>
			{showAnswers &&
				(options.slice(0, optionsToShow).length === 1 ? (
					<div id='option-buttons' className='btn-flex'>
						<button
							className='btn'
							onClick={() => handleOptionClick(options[0])}
						>
							{options[0].text}
						</button>
					</div>
				) : (
					<div id='option-buttons' className='btn-grid'>
						{options.slice(0, optionsToShow).map((option) => (
							<button
								className='btn'
								key={option.id}
								onClick={() => handleOptionClick(option)}
							>
								{option.text}
							</button>
						))}
					</div>
				))}
		</div>
	);
};
export default Dialog;

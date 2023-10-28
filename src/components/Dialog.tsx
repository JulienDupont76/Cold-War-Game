import TypeWriter from './TypeWriter';

type DialogProps = {
	text: string | undefined;
	options: [];
	handleOptionClick: (option) => void;
};

const Dialog = (props: DialogProps) => {
	const { text, options, handleOptionClick } = props;

	return (
		<div className='container'>
			<TypeWriter text={text} delay={80} />
			<div id='option-buttons' className='btn-grid'>
				{options.map((option) => (
					<button
						className='btn'
						key={Math.random()}
						onClick={() => handleOptionClick(option)}
					>
						{option.text}
					</button>
				))}
			</div>
		</div>
	);
};
export default Dialog;

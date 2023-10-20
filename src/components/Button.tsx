type ButtonProps = {
	text: string | undefined;
	options: [];
	handleOptionClick: (option) => void;
};

const Button = (props: ButtonProps) => {
	const { text, options, handleOptionClick } = props;

	return (
		<div className='container'>
			<div id='text'>{text}</div>
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
export default Button;

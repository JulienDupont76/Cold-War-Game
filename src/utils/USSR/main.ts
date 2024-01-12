import { textNodes, Option } from './story';

export interface GameState {
	nation?: string;
	military: number;
	science: number;
	economy: number;
}

let state: GameState = { military: 50, science: 50, economy: 50 };

export const showTextNode = (textNodeIndex: number) => {
	const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
	const filteredOptions = textNode?.options.filter((option) =>
		showOption(option)
	);
	return { text: textNode?.text, options: filteredOptions, Gamestate: state };
};

const showOption = (option: Option) => {
	return option.requiredState == null || option.requiredState(state);
};

export const selectOptions = (option: Option) => {
	const nextTextNodeId = option.nextText;
	const updatedMilitary = Math.min(
		100,
		Math.max(0, state.military + (option.setState.military || 0))
	);
	const updatedScience = Math.min(
		100,
		Math.max(0, state.science + (option.setState.science || 0))
	);
	const updatedEconomy = Math.min(
		100,
		Math.max(0, state.economy + (option.setState.economy || 0))
	);

	state = {
		...state,
		...option.setState,
		military: updatedMilitary,
		science: updatedScience,
		economy: updatedEconomy,
	};
	return nextTextNodeId;
};

export const resetGameState = () => {
	state = { military: 50, science: 50, economy: 50 };
};

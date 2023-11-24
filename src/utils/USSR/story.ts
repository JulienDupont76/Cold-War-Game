import { GameState } from './main';

export interface Option {
	id: number;
	text: string;
	requiredState?: (currentState: GameState) => boolean;
	setState: { [key: string]: any };
	nextText: number;
}

export const textNodes = [
	{
		id: 1,
		text: 'Test test test',
		options: [
			{
				id: 1,
				text: 'United States of America',
				setState: { nation: 'USA' },
				nextText: 2,
			},
			{
				id: 2,
				text: 'USSR',
				setState: { nation: 'USSR' },
				nextText: 2,
			},
		] as Option[],
	},
	{
		id: 2,
		text: 'Next decision',
		options: [
			{
				id: 1,
				text: 'Test 1',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { test: true },
				nextText: 3,
			},
			{
				id: 2,
				text: 'Test 2',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USSR',
				setState: { test: false },
				nextText: 3,
			},
		] as Option[],
	},
];

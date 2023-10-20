export const textNodes = [
	{
		id: 1,
		text: 'Which nation do you want to play',
		options: [
			{
				text: 'United States of America',
				setState: { nation: 'USA' },
				nextText: 2,
			},
			{
				text: 'USSR',
				setState: { nation: 'USSR' },
				nextText: 2,
			},
		],
	},
	{
		id: 2,
		text: 'Next decision',
		options: [
			{
				text: 'Test 1',
				requiredState: (currentState) => currentState.nation === 'USA',
				setState: { test: true },
				nextText: 3,
			},
			{
				text: 'Test 2',
				requiredState: (currentState) => currentState.nation === 'USSR',
				setState: { test: false },
				nextText: 3,
			},
		],
	},
];

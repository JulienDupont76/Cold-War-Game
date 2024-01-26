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
		text: '1945 the second world war just ended. You receives a call from your secretary: \n “Hello Sir, we just got informed that the USSR has begun a race for science, weaponry, and space. Do you wish to do anything?”',
		options: [
			{
				id: 1,
				text: 'Embrace the challenge and lead your nation into a new era of scientific and military dominance.',
				setState: {
					nation: 'USA',
				},
				nextText: 2,
			},
			{
				id: 2,
				text: 'Decline the offer. The weight of leading a superpower is too much to bear.',
				nextText: 3,
			},
		] as Option[],
	},
	{
		id: 2,
		text: 'Message received sir, let’s beat the hell out of them!',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 4,
			},
		] as Option[],
	},
	{
		id: 3,
		text: 'In 1960, the USSR has taken over space, weaponry and science, and your comprehension of any of these domains is so far from theirs, you feel that you have lost something… 2010: You have lost your country because you were too pacific.',
		options: [
			{
				id: 1,
				text: 'Next',
				setState: {
					military: -50,
					science: -50,
					economy: -50,
					culture: -50,
				},
				nextText: 4,
			},
		] as Option[],
	},
	{
		id: 4,
		text: 'Your wife: “Hello my darling, what would you like to have for dinner tonight?”',
		options: [
			{
				id: 1,
				text: 'Vodka',
				nextText: 5,
			},
			{
				id: 2,
				text: 'Hamburger',
				nextText: 5,
			},
		] as Option[],
	},
	{
		id: 5,
		text: 'Okay, dinner’s at 7PM',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 6,
			},
		] as Option[],
	},
	{
		id: 6,
		text: 'Sir, we can send a spy to get information from the other party, would you like to proceed with this action?',
		options: [
			{
				id: 1,
				text: 'Yes',
				nextText: 7,
			},
			{
				id: 2,
				text: 'No',
				nextText: 8,
			},
		] as Option[],
	},
	{
		id: 7,
		text: 'Perfect, we will have access to a good amount of information coming from the other side.',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 9,
			},
		] as Option[],
	},
	{
		id: 8,
		text: 'Roger that, we will make do with what we have.',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 9,
			},
		] as Option[],
	},
	{
		id: 9,
		text: '1949: Mr. President, our informant found out that the USSR has successfully tested an atomic bomb last night. The world is now facing an increased threat of nuclear conflict. What course of action will you take to ensure the safety and strength of the United States?',
		options: [
			{
				id: 1,
				text: 'Let’s develop a better one (H Bomb)',
				setState: { science: 100, military: 15, economy: -10, culture: -15 },
				nextText: 10,
			},
			{
				id: 2,
				text: 'Let’s stop this nonsense and make a peace treaty!',
				nextText: 10,
				setState: { science: -5, military: -10, economy: 5, culture: 15 },
			},
			{
				id: 3,
				text: "Let's invest in strengthening defensive measures against potential nuclear attacks",
				nextText: 10,
				setState: { science: -5, military: 5, economy: 10, culture: 5 },
			},
		] as Option[],
	},
	{
		id: 10,
		text: '1950: Mr. President, our intelligence reports indicate that the USSR and China are exerting pressure on Korea and may be planning an invasion. This is a critical moment, and the world is watching. What course of action will you take to address this escalating situation?',
		options: [
			{
				id: 1,
				text: "We should get involved, let's go give a hand to Korea!",
				setState: { military: -10, economy: -10, culture: 5 },
				nextText: 11,
			},
			{
				id: 2,
				text: "We shouldn't get involved; we have other problems to think about",
				nextText: 11,
				setState: { economy: 10, culture: -10 },
			},
		] as Option[],
	},
	{
		id: 11,
		text: '1955: Mr. President, a new opportunity has presented itself for us to embark on a groundbreaking space project. How would you like to proceed?',
		options: [
			{
				id: 1,
				text: 'Yes, we need to beat the Soviets to space.',
				setState: { science: 20, economy: -10, culture: 5 },
				nextText: 12,
			},
			{
				id: 2,
				text: 'No, it’s not the right way to go.',
				nextText: 12,
				setState: { science: -15, economy: 10, culture: -5 },
			},
		] as Option[],
	},
	{
		id: 12,
		text: 'Your friends call you to ask if you want to grab a beer with them.',
		options: [
			{
				id: 1,
				text: "Sure thing! Let's grab a beer and discuss world peace strategies on the side.",
				nextText: 13,
			},
			{
				id: 2,
				text: "Sorry, I don't have time for that with the current crisis.",
				nextText: 13,
			},
		] as Option[],
	},
	{
		id: 13,
		text: '1957: Mr. President, urgent news has reached us. The USSR has achieved a significant milestone by launching their first satellite, Sputnik, into space. How shall we respond to this development?',
		options: [
			{
				id: 1,
				text: 'Quick we need to overcome their progress and lead the space race!',
				setState: { science: 15, economy: -15, culture: 5 },
				nextText: 14,
			},
			{
				id: 2,
				text: 'Let them be, we don’t have enough money to invest anyway.',
				nextText: 14,
				setState: { science: -15, economy: 15, culture: -5 },
			},
		] as Option[],
	},
	{
		id: 14,
		text: '1962: Mr. President, our informant has alarming news. The USSR is planning to go to Cuba and potentially establish a nuclear outpost. This poses a significant threat to our national security. What would you like to do?',
		options: [
			{
				id: 1,
				text: "I believe it's crucial for us to engage in diplomatic talks. We should seek a peaceful resolution.",
				setState: { culture: 15, economy: 10 },
				nextText: 15,
			},
			{
				id: 2,
				text: 'We should start a war, they’re too close, it’s too dangerous.',
				nextText: 15,
				setState: { military: 15, economy: -10, culture: -15 },
			},
		] as Option[],
	},
	{
		id: 15,
		text: "Your secretary asks you what coffee you'd like.",
		options: [
			{
				id: 1,
				text: 'Black, strong, and as bold as our foreign policy.',
				nextText: 16,
			},
			{
				id: 2,
				text: "I'll have to pass on the coffee; it's just not my cup of tea.",
				nextText: 16,
			},
		] as Option[],
	},
	{
		id: 3,
		text: 'As you step into the Oval Office, you face your first major decision.',
		options: [
			{
				id: 1,
				text: 'Prioritize advancements in science and technology to strengthen the nation.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { science: 40 },
				nextText: 3,
			},
			{
				id: 2,
				text: 'Focus on building a powerful military to ensure national security.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { military: 40 },
				nextText: 3,
			},
			{
				id: 3,
				text: 'Strengthen the economy to enhance the prosperity of the American people.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { economy: 40 },
				nextText: 3,
			},
		] as Option[],
	},
	{
		id: 3,
		text: 'The year is 1962, and the Cuban Missile Crisis casts a threatening shadow over the world. The United States and the Soviet Union stand on the brink of nuclear confrontation due to the deployment of Soviet missiles in Cuba. As the leader of your nation, you confront crucial decisions that will determine the fate of your country and the world. Making the wrong choices could lead your nation to defeat and risk triggering the third world war.',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 4,
			},
		] as Option[],
	},
	{
		id: 4,
		text: 'You receive intelligence reports indicating that the Soviet Union is deploying nuclear missiles in Cuba. Your nation feels threatened, and the world holds its breath as the two superpowers approach the point of no return.',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 5,
			},
		] as Option[],
	},
	{
		id: 5,
		text: 'How will you approach this crisis with the USSR?',
		options: [
			{
				id: 1,
				text: 'Initiate diplomatic talks to find a peaceful solution.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { military: -5, economy: 5 },
				nextText: 6,
			},
			{
				id: 2,
				text: 'Demand immediate withdrawal of missiles with threats of retaliation.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { military: 10, economy: -5 },
				nextText: 6,
			},
			{
				id: 3,
				text: 'Seek support from international allies for a united front.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { economy: 2 },
				nextText: 6,
			},
		] as Option[],
	},
	{
		id: 6,
		text: 'What concrete action will you take to prevent the arrival of new missiles?',
		options: [
			{
				id: 1,
				text: 'Implement a naval blockade around Cuba to halt deliveries.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { military: 10, economy: -5 },
				nextText: 7,
			},
			{
				id: 2,
				text: 'Launch a military operation to destroy the missiles on-site.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { military: 5, economy: -10, culture: 5 },
				nextText: 7,
			},
			{
				id: 3,
				text: 'Covertly sabotage the missile shipment without direct confrontation.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { science: 3, military: -5 },
				nextText: 7,
			},
		] as Option[],
	},
	{
		id: 7,
		text: 'How do you plan to explain the situation to the American people?',
		options: [
			{
				id: 1,
				text: 'Inform the public about the threat but emphasize commitment to a peaceful resolution.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { culture: 3, economy: 2 },
				nextText: 8,
			},
			{
				id: 2,
				text: 'Adopt a firm stance, emphasizing national defense and the need to protect the country.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { economy: -3, culture: 10 },
				nextText: 8,
			},
			{
				id: 3,
				text: 'Address the public cautiously, downplaying the severity of the crisis for stability.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { economy: 5, culture: -5 },
				nextText: 8,
			},
		] as Option[],
	},
];

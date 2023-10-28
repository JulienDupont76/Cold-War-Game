import { useState } from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [music, setMusic] = useState<boolean>(true);

	return (
		<div className='fixed bottom-8 right-10 flex flex-col-reverse gap-4 justify-start items-center'>
			<button
				className='inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'
				onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
			>
				<i className='ri-settings-4-line'></i>
			</button>
			{isOpen && (
				<>
					<a
						href='https://github.com/JulienDupont76/Cold-War-Game'
						target='_blank'
						className='inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'
					>
						<i className='ri-github-fill'></i>
					</a>
					<button
						className='inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'
						onClick={() => setMusic((prevMusic) => !prevMusic)}
					>
						{music ? (
							<i className='ri-volume-down-line'></i>
						) : (
							<i className='ri-volume-mute-line'></i>
						)}
					</button>
					<button className='inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'>
						<i className='ri-translate-2'></i>
					</button>
					<button className='inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'>
						<i className='ri-refresh-line'></i>
					</button>
					<button className='inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'>
						<i className='ri-information-line'></i>
					</button>
					<button className='inline-flex h-14 border border-white/10 bg-white/50 items-center rounded-full px-5 gap-2 hover:bg-white hover:text-black transition-colors duration-200 outline-none'>
						<i className='ri-logout-box-line'></i>
					</button>
				</>
			)}
		</div>
	);
};
export default Settings;

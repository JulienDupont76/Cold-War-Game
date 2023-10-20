// create home page with play button
//

import './HomePage.css';

const PLAYING_MODE = 0;
const HOME_MODE = 1;
const OPTION_MODE = 2;

export const HomePage = (setCurrentMode: (mode: number) => void) => {

    return (
        <div className='back'>
            <div className='bg'></div>
            <div className='container'>
                <button className="btn" onClick={() => setCurrentMode(PLAYING_MODE)}>Play</button>
                <button className="btn" onClick={() => setCurrentMode(OPTION_MODE)}>Options</button>
            </div>
        </div>
    );
}

export default HomePage;
export { PLAYING_MODE, HOME_MODE, OPTION_MODE };
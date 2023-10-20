// create home page with play button
//

import './OptionPage.css';
import {HOME_MODE} from "./HomePage";

export const optionPage = (setCurrentMode: (mode: number) => void) => {

    return (
        <div className='back'>
            <div className='bg'></div>
            <div className='container'>
                <div id='text'>settings</div>
                <div id='option-buttons' className='btn-grid'>
                    <button className='btn'>Option 1</button>
                    <button className='btn'>Option 2</button>
                    <button className='btn'>Option 3</button>
                    <button className='btn'>Option 4</button>
                    <button className="btn" onClick={() => setCurrentMode(HOME_MODE)}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default optionPage;
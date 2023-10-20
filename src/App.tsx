import { useState } from "react";
import './App.css';
import homePage from "./Pages/HomePage";
import { HOME_MODE, PLAYING_MODE, OPTION_MODE } from "./Pages/HomePage";
import gameplay from "./Pages/Gameplay";
import optionPage from "./Pages/OptionPage";

function App() {
	const [currentMode, setCurrentMode] = useState(HOME_MODE);

	return (
		<div className="App">
			{currentMode === HOME_MODE && homePage(setCurrentMode)}
			{currentMode === PLAYING_MODE && gameplay(setCurrentMode)}
			{currentMode === OPTION_MODE && optionPage(setCurrentMode)}
		</div>
	);
}


export default App;

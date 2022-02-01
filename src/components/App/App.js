import React, {useState} from "react";
import Header from '../Header';
import Spacer from '../Spacer';
import MainContent from '../MainContent';

function App() {
	const [planet, setPlanet] = useState(0);
  return (
    <>
    	<Header setPlanet={setPlanet}/>
    	<Spacer size={20}/>
    	<main>
    		<MainContent planet={planet}/>
    	</main>
    </>
  );
}

export default App;

import React, {useState} from "react";
import Header from '../Header';
import MainContent from '../MainContent';

function App() {
	const [planet, setPlanet] = useState(0);
	const [content, setContent] = useState(0);
  return (
    <>
    	<Header
    		planet={planet}
    		setPlanet={setPlanet}
    		content={content}
    		setContent={setContent}
    	/>
    	<main>
    		<MainContent
    			planet={planet}
    			content={content}
    			setContent={setContent}
    		/>
    	</main>
    </>
  );
}

export default App;

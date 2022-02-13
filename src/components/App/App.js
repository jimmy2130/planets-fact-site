import Header from '../Header';
import MainContent from '../MainContent';
import { useStickyState } from '../../util';

function App() {
	const [planet, setPlanet] = useStickyState(0, "planet");
	const [content, setContent] = useStickyState(0, "content");
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

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Packages from './Pages/Packages';
import PageNotFound from './Pages/PageNotFound';
import Contact from './Pages/Contact';
import Upload from './Pages/Upload';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />

					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/packages' element={<Packages />} />
					<Route path='/upload' element={<Upload />} />

					<Route path='/404' element={<PageNotFound />} />
					<Route path='*' element={<Navigate to='404' replace='true' />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

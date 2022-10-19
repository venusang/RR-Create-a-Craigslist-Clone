// Import data

// Import components
import Sidebar from './components/sidebar';
import Searchbar from './components/searchbar';
import Directory from './components/directory';
import Gallery from './components/gallery';

import './App.css';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Sidebar />
        <Searchbar />
        <Directory />
        <Gallery />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';

import './App.css';
import { Navbar } from './components/project/Navbar';
import { GlobalStyle } from './globalstyles';
import { Project } from './components/project/Project';
import { Steps } from './components/project/Steps';

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Navbar />
      <Project /> */}
      <Steps />
    </div>
  );
}

export default App;

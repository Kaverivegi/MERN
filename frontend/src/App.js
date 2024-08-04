//import logo from './logo.svg';
import './App.css';
// import Chat from './chat';
// import Username from './username';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Python from './components/python';
import Python1 from './components/python1';
import Python2 from './components/python2';
import Python3 from './components/python3';
import Python4 from './components/python4';
import Python5 from './components/python5';
import Ai from './components/ai';
import Ai1 from './components/ai1';
import Ai2 from './components/ai2';
import Ai3 from './components/ai3';
import Ai4 from './components/ai4';
import Ai5 from './components/ai5';
import Ml from './components/ml';
import Ml1 from './components/ml1';
import Ml2 from './components/ml2';
import Ml3 from './components/ml3';
import Ml4 from './components/ml4';
import Ml5 from './components/ml5';
import Ds from './components/ds';
import Ds1 from './components/ds1';
import Ds2 from './components/ds2';
import Ds3 from './components/ds3';
import Ds4 from './components/ds4';
import Ds5 from './components/ds5';
import Law from './components/law';
import Law1 from './components/law1';
import Law2 from './components/law2';
import Law3 from './components/law3';
import Law4 from './components/law4';
import Law5 from './components/law5';
import Arc from './components/arc';
import Arc1 from './components/arc1';
import Arc2 from './components/arc2';
import Arc3 from './components/arc3';
import Arc4 from './components/arc4';
import Arc5 from './components/arc5';
import Pd from './components/pd';
import Pd1 from './components/pd1';
import Pd2 from './components/pd2';
import Pd3 from './components/pd3';
import Pd4 from './components/pd4';
import Pd5 from './components/pd5';
import Chat from './components/chat';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/python' element={<Python />} />
          <Route path='/python1' element={<Python1 />} />
          <Route path='/python2' element={<Python2 />} />
          <Route path='/python3' element={<Python3 />} />
          <Route path='/python4' element={<Python4 />} />
          <Route path='/python5' element={<Python5 />} /> 
          <Route path='/ai' element={<Ai />} />
          <Route path='/ai1' element={<Ai1 />} />
          <Route path='/ai2' element={<Ai2 />} />
          <Route path='/ai3' element={<Ai3 />} />
          <Route path='/ai4' element={<Ai4 />} />
          <Route path='/ai5' element={<Ai5 />} />
          <Route path='/ml' element={<Ml/>} />
          <Route path='/ml1' element={<Ml1/>} />
          <Route path='/ml2' element={<Ml2/>} />
          <Route path='/ml3' element={<Ml3/>} />
          <Route path='/ml4' element={<Ml4/>} />
          <Route path='/ml5' element={<Ml5/>} />
          <Route path='/ds' element={<Ds />} />
          <Route path='/ds1' element={<Ds1 />} />
          <Route path='/ds2' element={<Ds2 />} />
          <Route path='/ds3' element={<Ds3 />} />
          <Route path='/ds4' element={<Ds4 />} />
          <Route path='/ds5' element={<Ds5 />} />
          <Route path='/arc' element={<Arc />} />
          <Route path='/arc1' element={<Arc1 />} />
          <Route path='/arc2' element={<Arc2 />} />
          <Route path='/arc3' element={<Arc3 />} />
          <Route path='/arc4' element={<Arc4 />} />
          <Route path='/arc5' element={<Arc5/>} />
          <Route path='/law' element={<Law />} />
          <Route path='/law1' element={<Law1 />} />
          <Route path='/law2' element={<Law2 />} />
          <Route path='/law3' element={<Law3 />} />
          <Route path='/law4' element={<Law4 />} />
          <Route path='/law5' element={<Law5 />} />
          <Route path='/pd' element={<Pd />} />
          <Route path='/pd1' element={<Pd1 />} />
          <Route path='/pd2' element={<Pd2 />} />
          <Route path='/pd3' element={<Pd3 />} />
          <Route path='/pd4' element={<Pd4 />} />
          <Route path='/pd5' element={<Pd5 />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

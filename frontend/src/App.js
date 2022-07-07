import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import FooterComponent from './components/FooterComponent';
//import HeaderComponent from './components/HeaderComponent';
import FooterComponentHook from './components/FooterComponentHook';
import HeaderComponentHook from './components/HeaderComponentHook';
//import ListTaskComponent from './components/ListTaskComponent';
import AddTaskComponentHook from './components/AddTaskComponentHook';
import ListTaskComponentHook from './components/ListTaskComponentHook';
//import {AddTaskButton} from './components/AddTaskButton'


function App() {
  return (
    <div>
      <HeaderComponentHook/>         
      <Router>
              <Routes>
                  <Route path="/" exact element= {<ListTaskComponentHook/>} ></Route>
                  <Route path="/tasklists" element= {<ListTaskComponentHook/>}></Route>
                  <Route path="/addtask" element= {<AddTaskComponentHook/>}></Route>
                  <Route path="/edittask/:id" element= {<AddTaskComponentHook/>}></Route>
              </Routes>
      </Router>
      <FooterComponentHook/>
    </div>
  );
}

export default App;

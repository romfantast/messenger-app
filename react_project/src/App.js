import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';

function App() {
    return (
        <div className="main">
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/note/" element={<Note/>}/>
                    <Route path="/note/:noteUrl" element={<Note/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;

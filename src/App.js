 // src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MultiPageForm from './components/MultiPageForm';
import ResultPage from './components/ResultPage';
import Page2 from './components/Page2';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MultiPageForm />} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </Router>
    );
}

export default App;

 

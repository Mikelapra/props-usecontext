import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Result from './Result';

function RoutesApp() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Calculator />}></Route>
                    <Route path="/result" element={<Result />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default RoutesApp;
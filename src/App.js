import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Reference from './components/pages/Reference';
import ReferDetail from './components/pages/ReferDetail';
import Script from './components/pages/Script';
import Youtube from './components/pages/Youtube';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

function App(){
    //주소 (spa 페이지이기 때문에 주소가 없기 대문에 가상주소 생성)
    return (
        <Router>
            <Route path="/" exact component={Main} />
            <Route path="/about" component={About} />
            <Route path="/reference" component={Reference} />
            <Route path="/referDetail" component={ReferDetail} />
            <Route path="/script" component={Script} />
            <Route path="/youtube" component={Youtube} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
        </Router>
    )
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Script from "./components/pages/Script";
import Youtube from "./components/pages/Youtube";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import ReferDetail from "./components/pages/ReferDetail";
import ReferDetail2 from "./components/pages/ReferDetail2";
import ReferDetail3 from "./components/pages/ReferDetail3";


function App(){
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About}/>
      <Route path="/reference" component={Reference}/>
      <Route path="/refer-detail" component={ReferDetail}/>
      <Route path="/refer-detail2" component={ReferDetail2}/>
      <Route path="/refer-detail3" component={ReferDetail3}/>

      <Route path="/script" component={Script} />
      <Route path="/youtube" component={Youtube}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/portfolio" component={Portfolio}/>
    </Router>
  )
}

export default App;
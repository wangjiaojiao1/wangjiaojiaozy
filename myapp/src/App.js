import React, {Component} from 'react';
import './index.css';
import './reset.css'
import './aboutEBSNO.css';
import './team.css';
import './artgray.css';
import './contact.css';
import Header from './header';
import AboutEBSNO from './aboutEBSNO';
import Team from './team';
import Artgray from './artgray';
import Contact from './contact';
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
               
                <Contact/>
            </div>
        );
    }
}

export default App;
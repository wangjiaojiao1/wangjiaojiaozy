import React, {Component} from 'react';
import './index.css';
import './reset.css'
import './aboutEBSNO.css';
import './team.css';
import Header from './header';
import AboutEBSNO from './aboutEBSNO';
import Team from './team';
 
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
               
                <Team/>
            </div>
        );
    }
}

export default App;
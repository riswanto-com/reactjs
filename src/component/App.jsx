import React,{Component,Fragment} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';

class App extends Component{
    render(){
        return(<BrowserRouter>
                <Navbar/>
                <Content/>
        </BrowserRouter>
                
        );
    }
}
export default App;

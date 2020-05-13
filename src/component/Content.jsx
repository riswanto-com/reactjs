import React,{Component,Fragment} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Tentang from './Tentang';
import Pendidikan from './Pendidikan';
import Pengalaman from './Pengalaman';
import Keterampilan from './Keterampilan';
import Prestasi from './Prestasi';
import Others from './Others';

class Content extends Component{
    render(){
        return(
          <div class="container-fluid p-0">
              <Tentang></Tentang>
              <Pendidikan></Pendidikan>
              <Pengalaman></Pengalaman>
              <Keterampilan></Keterampilan>
              <Prestasi></Prestasi>
              <Others></Others>
          </div>
          
        )
    }
}
export default Content;
import React,{Component,Fragment} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
         <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top" id="sideNav">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">
                        <span class="d-block d-lg-none">Riswanto</span>
                        <span class="d-none d-lg-block">
                            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt=""/>
                        </span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#saya">Tentang Saya</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#pendidikan">Pendidikan</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#pengalaman">Pengalaman</a>
                            </li> 
                            <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#ketrampilan">Ketrampilan</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#prestasi">PRESTASI</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#lainnya">Others</a>
                            </li>
                        </ul>
                    </div>
                </nav>
               
        );
    }
}
export default Navbar;

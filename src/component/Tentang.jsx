import React,{Component,Fragment} from 'react';

class Tentang extends Component{
    render(){
        return(
                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="saya">
                    <div class="w-100">
                    <h1 class="mb-0">Riswanto
                        <span class="text-primary"></span>
                    </h1>
                    <div class="subheading mb-5">Jl. Kuningan Barat 1 No. 26 Rt/Rw 04/01 Kuningan Barat, Mampang Prapatan, Jakarta Selatan 12710  <br/>
                    <a href="#">089634922954</a> | <a href="mailto:wawan2072@gmail.com">wawan2072@gmail.com</a>
                    </div>
                    <p class="lead mb-5">
                        Memiliki semangat yang tinggi, Disiplin dan Jujur dalam bekerja.
                    </p>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/riswanto-wan-5a5ab314a" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/jejaksetapak" target="_blank">
                        <i class="fab fa-github"></i>
                        </a>
                        <a href="https://web.facebook.com/citoek" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    </div>
                </section>
       );
    }
}
export default Tentang;
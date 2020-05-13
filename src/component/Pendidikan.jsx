import React,{Component,Fragment} from 'react';

class Pendidikan extends Component{
    render(){
        return(
           
              <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="pendidikan">
                <div class="w-100">
                  <h2 class="mb-5">Pendidikan</h2>
              
                  <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                      <h3 class="mb-0">Bina Sarana Informatika</h3>
                      <div class="subheading mb-3">Program Pendidikan Diploma Tiga</div>
                      <div>Manajemen Informatika</div>
                      <p>IPK: 3.82</p>
                    </div>
                    <div class="resume-date text-md-right">
                      <span class="text-primary">2013 - 2016</span>
                    </div>
                  </div>
              
                  <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div class="resume-content">
                      <h3 class="mb-0">SMK Muhammadiyah Pekalongan</h3>
                      <div class="subheading mb-3">Teknik Kendaraan Ringan</div>
                      <p>IPK: 8.3</p>
                    </div>
                    <div class="resume-date text-md-right">
                      <span class="text-primary">2009 - 2012</span>
                    </div>
                  </div>
              
                </div>
              </section>
          )
    }
}
export default Pendidikan;
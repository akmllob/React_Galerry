// import React, { Component } from 'react';
// import './App.css';
// import Media from './Components/media';
// import Osis from './Components/form';

//ROUTE MODUL 2

import React from "react";
import "./App.css"
// // import Utama from "./Components/utama";
import Header from "./page/Header";
import JalanAja from "./Jalan";
// import { Link } from "react-router-dom";
// import Utama from "./Utama";
// import {Link} from "react-router-dom"


class App extends React.Component {
  render(){
    return(
      <div>
      <Header/>
      <JalanAja/>
      </div>
    );
  }
}

//PRAKTIKUM 1

// class App extends Component {
//   render(){
//     return(
//       <header>
//         <div className='title'>PANCASILA</div>
//         <br></br>
//         <div className='head-text'>
//         <div className='text-on-image'>
//           <strong>Sila Pertama</strong>
//           <br></br>
//           Ketuhanan Yang Maha Esa
//         </div>
//         <Media image='bintang.png'></Media>
//         </div>
        
//         <div className='head-text'>
//         <div className='text-on-image'>
//           <strong>Sila Kedua</strong>
//           <br></br>
//           Kemanusiaan Yang Adil dan Beradap
//         </div>
//         <Media image='rantai.png'></Media>
//         </div>

//         <div className='head-text'>
//         <div className='text-on-image'>
//           <strong>Sila Ketiga</strong>
//           <br></br>
//           Persatuan indonesia
//         </div>
//         <Media image='beringin.png'></Media>
//         </div>

//         <div className='head-text'>
//         <div className='text-on-image'>
//           <strong>Sila Keempat</strong>
//           <br></br>
//           Kerakyatan Yang Dipimpin Oleh Hikmad Kebijaksanaan Dalam Permusyawaratan Perwakilan
//         </div>
//         <Media image='banteng.png'></Media>
//         </div>

//         <div className='head-text'>
//         <div className='text-on-image'>
//           <strong>Sila Kelima</strong>
//           <br></br>
//           Keadilan Sosial Bagi Seluruh Rakyat Indonesia
//         </div>
//         <Media image='padi dan kapas.png'></Media>
//         </div>

//         <Osis/>
//         <br></br>

//       </header>
      
//     )
//   }

//BMI

  // constructor(props){
  //   super(props);
    
  //   this.state = {
  //     berat: '0',
  //     tinggi: '0',
  //     hasil: "Anda ideal",
  //     pesan: ""
  //   }

  //   this.beratChange = this.beratChange.bind(this);
  //   this.tinggiChange = this.tinggiChange.bind(this);
  //   this.hitungBMI = this.hitungBMI.bind(this);

  // }

  // 	beratChange = (event) =>{  
  // 	  this.setState({berat: event.target.value});  
  // 	}  

  // 	tinggiChange = (event) => {  
  // 	  this.setState({tinggi: event.target.value});  
  // 	}  

  //   hitungBMI = (event) => {
  //     let tinggi = this.state.tinggi / 100; // Konversi tinggi dari cm ke meter
  //     let berat = this.state.berat;
    
  //     // hitung
  //     let hasil = berat / (tinggi * tinggi);
    
  //     // seleksi
  //     if (hasil <= 18.5) {
  //       this.setState({ hasil: "Anda Kurus" });
  //     } else if (hasil > 18.5 && hasil <= 22.9) {
  //       this.setState({ hasil: "Anda Ideal" });
  //     } else if (hasil >= 23 && hasil <= 24.9) {
  //       this.setState({ hasil: "Anda Obesitas" });
  //     } else {
  //       this.setState({ hasil: "Anda Tidak Normal" });
  //     }
  //   }  

  // render(){
  //   return (
  //     <div className="card col-sm-5 mx-auto m-5">
  //       <div className="card-header bg-sendary text-center text-dark">
  //           <h4>Body Mass Index</h4>
  //       </div>

  //       <div className="card-body">
  //         <div class="input-group mb-2">
  //               <div class="input-group-prepend">
  //                 <label class="input-group-text">Berat (kg) </label>
  //               </div>
  //               <input type="number" className="form-control" value={this.state.berat} onChange={this.beratChange}/>
  //         </div>
  //         <div className="input-group mb-2">
  //               <div class="input-group-prepend">
  //                 <label class="input-group-text">Tinggi (m)</label>
  //               </div>
  //               <input type="number" className="form-control" value={this.state.tinggi} onChange={this.tinggiChange}/>
  //         </div>
  //       </div>

  //       <div className="card-footer">
  //         <button className="form-control btn btn-info text-white" onClick={this.hitungBMI}>
  //           Hitung
  //         </button>
  //         <h4 className="text-center mt-4">Hasil</h4>
  //         {/* Alert */}
  //         <Alert hasil={this.state.hasil} pesan={this.state.pesan}/>
  //       </div>
  //     </div>
      
    // );
  // }


export default App;

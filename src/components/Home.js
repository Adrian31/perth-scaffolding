// eslint-disable-next-line
import React, { Component } from 'react';
import SimpleSlider from '../components/SimpleSlider.js';
// import Slick from 'react-slick';

function Home () {

  	return (
    	<div className="ps-slider-container row">
			<SimpleSlider></SimpleSlider>
			<div className="scaffolding-options-container ps-container">
				<div className="row" >
					<div className="col-md-4 leadin-container">
						<img alt="Leadin" className="img-responsive" src={require('../images/leadin01.png')} />
						<h3 className="leadin-title" >Industrial</h3>
					</div>					
					<div className="col-md-4 leadin-container">
						<img alt="Leadin" className="img-responsive" src={require('../images/leadin02.png')} />
						<h3 className="leadin-title" >Residential</h3>
					</div>					
					<div className="col-md-4 leadin-container">
						<img alt="Leadin" className="img-responsive" src={require('../images/leadin03.png')} />
						<h3 className="leadin-title" >Free Quote</h3>
					</div>
				</div>
			</div>
    	</div>
  	)
 }
export default Home;





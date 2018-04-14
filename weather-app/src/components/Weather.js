import React from "react";
class Weather extends React.Component{

	render (){
		
		return(
                 <div class="Details">
                 {this.props.city&&this.props.country&&<p>Location: {this.props.country},{this.props.city}</p>}
                {this.props.temperature&& <p>Temperature: {this.props.temperature} C</p>}
                 {this.props.humidity&&<p>Humidity: {this.props.humidity} </p>}
                 {this.props.description&&<p>Description: {this.props.description}</p>}
                 {this.props.error&&<p>{this.props.error}</p>}
                 {this.props.showButtons ? <button id="btn1">Share</button> : null}
                 {this.props.showButtons ? <button id="btn2">Other City</button> : null}

                 </div>
			);
	}
};

export default Weather;
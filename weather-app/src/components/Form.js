import React from "react";
class Form extends React.Component{

	render (){
		return(
                 <form onSubmit={this.props.getWeather}>
                  <input type="text" name="city" class="city" placeholder="City..."/>
                  <input type="text" name="country" class="country" placeholder="Country..."/>
                  <button class="btn">Get Weather</button>
                 </form>
			);
	}
};
export default Form;
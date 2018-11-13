import React from "react";

class Form extends React.PureComponent {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="country" placeholder="placeholder"/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;
import React from "react";

class Weather extends React.PureComponent {
    render() {
        return (
            <div>
                { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                { this.props.temperature && <p>Temperature: {this.props.temperature} C</p>}
                { this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                { this.props.description && <p>Conditions: {this.props.description}</p>}
                { this.props.wind && <p>Wind speed: {this.props.wind} km/h</p>}
                { this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}

export default Weather;
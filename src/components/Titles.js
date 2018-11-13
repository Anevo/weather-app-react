import React from "react";

class Titles extends React.PureComponent {
    render() {
        return (
            <div>
                <h1 className="title-maintitle">Weather Finder</h1>
                <h3 className="title-subtitle">Find out your local weather</h3>
            </div>
        );
    }
}

export default Titles;
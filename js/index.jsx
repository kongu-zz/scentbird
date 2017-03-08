import React from "react";
import {connect} from "react-redux";
import {render} from "react-dom";

export class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                test
            </div>
        );
    }
}

render(
    <Main/>,
    document.getElementById('app')
);

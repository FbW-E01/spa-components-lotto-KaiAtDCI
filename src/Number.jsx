import React from "react";
import './Number.css'

export default class App extends React.Component {

    render() {
        return (
            <div className='Number'>
                {this.props.value}
            </div>
        );
    }
}
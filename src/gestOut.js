import React, { Component } from 'react';
class GestOut extends Component {
    render() {
        return (
            <div>
            <p onClick={this.props.onClick.bind(this,'gest')}>登出</p>
        </div>
    );
    }
}


export default GestOut;
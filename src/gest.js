import React, { Component } from 'react';
class Gest extends Component {
    render() {

        return (
            <div>
                <p onClick={this.props.onClick.bind(this,'gest')}>登陆</p>
            </div>
    );
    }
}


export default Gest;
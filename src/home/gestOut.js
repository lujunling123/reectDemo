import React, {Component} from 'react';
import {login} from 'actions/login';

import {connect} from 'react-redux';
import './css/gestOut.css'

class Counter extends Component {
    render() {
        return (
            <div>
            <div>当前用户{this.props.counter.user}</div>
        <button className="pagebox" onClick={() => this.props.login()}>切换账户
        </button>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(login())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
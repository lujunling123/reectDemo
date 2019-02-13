import React, { Component } from 'react';

import {AddNumber,JianNumber,ReacNumber} from "actions/comt"

import {connect} from 'react-redux';
import comt from "../redux/reducers/comt";
import {Link} from "react-router-dom";

class Comtent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            buttonClass: "white"
        }
    }

    AddNumber () {
        this.setState({
            buttonClass: "yellow"
        })
        this.props.AddNumber()
    }

    render () {
        return (
            <div>
            <div>当前计数为{this.props.counter.count}</div>
            <button className={this.state.buttonClass} onClick={this.AddNumber.bind(this)}>自增
            </button>
            <button onClick={() => this.props.JianNumber()}>自减
            </button>
        <button onClick={() => this.props.ReacNumber()}>重置
        </button>
        <Link to="/userinfo">UserInfo</Link>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.comt
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddNumber: () => {
            dispatch(AddNumber())
        },
        JianNumber: () => {
            dispatch(JianNumber())
        },
        ReacNumber: () => {
            dispatch(ReacNumber())
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Comtent)
import React, {Component} from 'react';
import {login} from 'actions/login';

import {connect} from 'react-redux';
import './gestOut.css'
import image from './images/aaa.jpg';

class Counter extends Component {
    render() {
        return (
            <div >
            <div style={{
            width:'200px',
                height:'80px',
                backgroundColor:'yellow',
                fontSize:'24px',
                textAlign:'center'
        }}>当前用户{this.props.counter.user}</div>
        <button className="pagebox" onClick={() => this.props.login()}>切换账户
        </button>
        <img src={image}/>
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
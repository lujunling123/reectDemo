import React, { Component } from 'react';
import User from './user'
import Gest from './gest'
import './App.css';

// class User extends Component {
//     render() {
//         return (<div>{this.props.user.name}</div>
//     );
//     }
// }

function NumList (props) {
    return <li>{props.value}</li>
}
function NumberCompe (props) {
    const numbers = props.numbers;
    // const numLists = numbers.map((number) =>
    //     <NumList key={number} value={number}/>
    // );
    return ( <ul>{numbers.map((number)=>
        <NumList key={number} value={number}/>
    )}</ul>)
}
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
            usera : 'admin',
            isToggleOn: false
        }
        this.activateLasers = this.activateLasers.bind(this)
    }
    // 挂载生命周期
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // 卸载生命周期
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // handleClick = () => {
    //     console.log('this is:', this);
    // }

    activateLasers (name,e) {
        console.log(this.state.isToggleOn)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

        console.log(this.state.isToggleOn)
    }


    tick() {
        // setState() 来接受一个函数而不是一个对象。
        // 该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：
        this.setState({
            date: new Date()
        });
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const isToggleOn = this.state.isToggleOn;
        let model = null
        if (isToggleOn) {
            model = <User data={this.state} onClick={this.activateLasers}/>
        }else {
            model = <Gest onClick={this.activateLasers}/>
        }
        return(
            <div className="App">
            <header className="App-header">
            {model}
                <NumberCompe numbers={numbers}/>
            <button onClick={this.activateLasers.bind(this,'zhangana')}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </header>
        </div>);
    }
}

export default App;

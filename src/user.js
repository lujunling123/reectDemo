import React, { Component } from 'react';

class User extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
            pass:'',
            text: '',
            selvalue: '1'
        }
        this.handelSubmit = this.handelSubmit.bind(this)
        this.handelChang = this.handelChang.bind(this)
    }
    handelSubmit (event) {
        console.log(this.state)
        this.setState({
            value: '',
            pass:'',
            text: '',
            selvalue: '1'
        });
        event.preventDefault();
    }
    handelChang (event) {
        console.log(event.target.value)
        // 控制全部大写
        // this.setState({value: event.target.value.toUpperCase()});
        // 多选框
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div>
            <button onClick={this.props.onClick.bind(this,'user')}>
                {this.props.data.usera} 注销
            </button>
            <p>{this.props.data.date.toLocaleTimeString()}</p>
            受控组件：
            <form onSubmit={this.handelSubmit}>
                <label>
                    Name:
                    <input type="text" name='value' value={this.state.value} onChange={this.handelChang} />
                </label><br/>
                <label>
                    pass:
                    <input type="password" name='pass' value={this.state.pass} onChange={this.handelChang} />
                </label><br/>
                <label>
                textarea:
                    <textarea name='text' value={this.state.text} onChange={this.handelChang} />
                </label><br/>
                <select value={this.state.selvalue} onChange={this.handelChang} name='selvalue'>
                    <option value="5">Grapefruit</option>
                    <option value="0">Lime</option>
                    <option value="1">Coconut</option>
                    <option value="2">Mango</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}
export default User;
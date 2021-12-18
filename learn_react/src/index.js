import React,{Component} from 'react'
import {render} from 'react-dom'

const app = document.createElement('div');
document.body.appendChild(app);


class Cont extends Component{
    constructor(){
        super()
        this.state = {
            name:"appName"
        } 
        this.handleName = this.handleName.bind(this)
    }

    handleName(){
        this.state.name != "appName" ? this.setState({name:"appName"}) : this.setState({name:"apple"})
    }

    render(){
        return <App name={this.state.name} action={this.handleName} />
    }
}


class App extends Component{
    constructor(){
        super()
        this.state = {
            a:1,
            b:2
        }
    }
    
    componentWillMount(){
        console.log('wm')
    }
    componentDidMount(){
        console.log('dm')
    }

    componentWillReceiveProps(np){
        console.log('WRP start')
        console.log(this.props)
        console.log(np)
        console.log('WRP end')
        
    }

    componentWillUpdate(np,ns){
        console.log('wu start')
        console.log(this.state)
        console.log(ns)
        console.log('wu end')
    }

    componentDidUpdate(pp,ps){
        console.log('Du start')
        console.log(ps)
        console.log(this.state)
        
        console.log('Du end')
    }
    

    render(){
        return (
            <div>
                <div>
                    <button onClick={() => console.log(this.props)}>get props</button>
                    <button onClick={() => console.log(this.state)}>get state</button>
                    <button onClick={() => console.log(this)}>this</button>

                    <button onClick={() => this.props.action()}>change props</button>
                    <button onClick={() => this.setState({z:1,a:8})}>change state</button>
                </div>
            </div>
        )
        
    }
}


render(<Cont />, app)
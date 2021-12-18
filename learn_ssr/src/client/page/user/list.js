import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {user_actions} from './userRedux'
import {connect} from 'react-redux'
import Loading from '../loading'


class UserList extends Component{
    constructor(){
        super()
        this.state = {
            loading: false,
        }
        this.getU = this.getU.bind(this)
    }
    
    componentDidMount(){
        this.setState({
            loading:true
        })
        this.getU()
    }
    

    getU(r=5){
        this.setState({
            loading:true
        })
        this.props.getUser(`https://randomuser.me/api/?results=${r}`)
    }

    componentWillReceiveProps(nextProps){
        //this.props.users.loading != nextProps.users.loading ? this.setState({loading:false}) : ''
    }

    componentDidUpdate(){
        //console.log(this.state)
        console.log(this.props.users)
    }

    render(){

        return (
            <div>
                <button onClick={()=>console.log(this.props)}>this.props</button>
                <button onClick={()=>console.log(this)}>this</button>
                <button onClick={()=>console.log(history)}> hitsory </button>


                <button onClick={()=>this.props.history.goBack()}> goback </button>

                <Link to={{pathname: "/userlist", search:"?result=20"}}><button onClick={() => this.getU(20)}>result 20</button></Link>
                <Link to={{pathname: "/userlist", search:"?result=10"}}><button onClick={() => this.getU(10)}>result 10</button></Link>
                <Link to={{pathname: "/userlist", search:"?result=5"}}><button onClick={() => this.getU(5)}>result 5</button></Link>

                
                
                {
                    this.props.users && this.props.users.results ? 
                    <table className="table">
                        <thead>
                            <tr>
                            <th>username</th>
                            <th>name</th>
                            <th>tel</th>
                            <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.users.results.map(e => (
                                        <tr key={e.login.uuid}>
                                        <th>{e.login.username}</th>
                                        <th>{e.name.first} {e.name.last}</th>
                                        <th>{e.phone}</th>
                                        <th>{e.email}</th>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                    : <div>nodata</div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (url) => {
            dispatch(user_actions.getUser(url));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList)
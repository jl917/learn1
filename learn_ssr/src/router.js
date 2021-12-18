import React from 'react'
import {Route,Link} from 'react-router-dom'
import Loadable from 'react-loadable';

import Loading from './client/page/loading'

const Main = Loadable({
    loading: Loading,
    loader: () => import('./client/page/index/index'),
    
})
const UserList = Loadable({
    loading: Loading,
    loader: () => import('./client/page/user/list'),
    
})


const routerConfig = [
    {
        path: '/',
        exact: true,
        component: Main
    },
    {
        path: '/userlist',
        component: UserList
    }
]


const Routes = () => 
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/userlist">用户列表</Link></li>
        </ul>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {routerConfig.map((attr,i) => (<Route {...attr} key={i} />))}
        </div>
    </div>


export default Routes
export {routerConfig}
import { createActions,handleActions } from 'redux-actions';
import fetch from 'node-fetch'

//actions
const user_actions = createActions({
    GET_USER: url => fetch(url).then(response => response.json()),
});


const users = handleActions({
    //获取用户
    GET_USER_PENDING: (state, action) => Object.assign(state,{loading:true}),
    GET_USER_FULFILLED: (state, action) => Object.assign(action.payload,{loading:false}),
    GET_USER_REJECTED: (state, action) => {console.log(action)},
},{});  


export {user_actions,users}
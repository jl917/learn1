const mongoose = require('mongoose');
global.dbHandle = require('./db/handle');
global.db = mongoose.connect("mongodb://localhost:27017/graphql_user");
const userDB = global.dbHandle.getModel('user');

var express = require('express');
var bodyParser = require("body-parser")
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var app = express();
app.use(bodyParser())

var schema = buildSchema(`
  type UserInfo {
    name: String
    username: String
    password: String
    gender: String
    email: String
    phone: String
    pic: String
  }

  type Query{
    getUser(limit:Int=1): User
  }
  type User{
    total: Int
    userList: [UserInfo]
  }

  type Mutation {
    addUser(
      name:String,
      username: String,
      password: String,
      gender: String,
      email: String,
      phone: String,
      pic: String
    ): UserState
  }
  type UserState{
    state: String
    user: UserInfo
  }
`);

let rootVal = {
  getUser: async ({ limit }) => {
    let resultValue;
    await userDB.find({}, (err, doc) => {
      resultValue = {
        total: 999,
        userList: doc
      }
    }).limit(limit);
    return resultValue
  },

  addUser: async (obj) => {
    let resultValue = {}
    await userDB.find({ username: obj.username }, (err, doc) => {
      if (doc[0]) {
        resultValue = { state: "账号重复", user: doc[0] }
      }
    })

    if (!resultValue.state) {
      await userDB.create(obj).then((doc) => {
        resultValue = { state: "成功", user: doc }
      })
    }

    return resultValue
  }
}

app.use('/graphql', graphqlHTTP((req, res, graphParams) => {
  return {
    schema: schema,
    rootValue: rootVal,
    graphiql: true,
  }
}))


app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
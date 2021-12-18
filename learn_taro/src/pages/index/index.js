import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Map} from '@tarojs/components'
import { AtNavBar } from 'taro-ui'

import './index.css'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  navigateTo(url,e){
    Taro.navigateTo({
      url
    })
    e.preventDefault()
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.navigateTo.bind(this,'../index/index')}>首页</Button>
        <Button onClick={this.navigateTo.bind(this,'../logs/logs')}>Logs</Button>
        <AtNavBar
  color='#ff0000'
  title='NavBar 导航栏示例'
  rightFirstIconType='bullet-list'
  rightSecondIconType='user'
/>
      </View>
    )
  }
}



export default Index

if (process.env.TARO_ENV === 'weapp') {
  //require('path/to/weapp/name')
} else if (process.env.TARO_ENV === 'h5') {
  //require('path/to/h5/name')
}

Taro.request({url:'https://guryong.cc'}).then(res => console.log(res.data))

import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Map} from '@tarojs/components'

import './logs.css'

class Logs extends Component {

  constructor(){
    super()
    
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
      </View>
    )
  }
}



export default Logs

if (process.env.TARO_ENV === 'weapp') {
  //require('path/to/weapp/name')
} else if (process.env.TARO_ENV === 'h5') {
  //require('path/to/h5/name')
}
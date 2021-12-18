import React, { Component } from 'react';
import { View,Text,Dimensions, SafeAreaView } from 'react-native';
import { WebView } from "react-native-webview";

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

class App extends Component {
  render() {
    return (
        <WebView
        source={{ uri: "https://baidu.com" }}
        style={{ width:deviceWidth,height:deviceHeight}}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
        >
        </WebView>
        

    );
  }
}

export default App
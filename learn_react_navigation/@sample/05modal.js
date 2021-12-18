import React from "react";
import { Button, View, Text } from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen2</Text>
                <Button onPress={() => this.props.navigation.navigate('MyModal')} title="Info" color="#000" /> {/* hilight */}

            </View>
        );
    }
}
/* hilight */
class ModalScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

/* hilight */
const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
    }
);
const RootNavigator = createStackNavigator(
    {
      Main: {
        screen: AppNavigator,
      },
      MyModal: {
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );


export default createAppContainer(RootNavigator);
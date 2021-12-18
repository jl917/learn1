import React from "react";
import { Button, View, Text } from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('Details',{
                  id:82,
                  content:'some content'
                })} title="Go to Details" />  {/* hilight */}
            </View>
        );
    }
}
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Details Screen</Text>
                <Text>{this.props.navigation.getParam('id', '0000')}</Text>{/* hilight */}
                <Text>{this.props.navigation.getParam('content', 'no content')}</Text>{/* hilight */}
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Go to Home" />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);
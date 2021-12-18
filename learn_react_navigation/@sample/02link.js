import React from "react";
import { Button, View, Text } from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('Details')} title="Go to Details" />  {/* hilight */}
            </View>
        );
    }
}
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Details Screen</Text>
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
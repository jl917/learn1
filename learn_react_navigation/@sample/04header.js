import React from "react";
import { Button, View, Text } from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        //header   
        //headerBackground
        //headerBackgroundTransitionPreset 

        //headerTitle
        //headerTitleAllowFontScaling
        //headerTitleStyle
        //headerTitleContainerStyle
        //headerTintColor

        //headerBackAllowFontScaling
        //headerBackImage
        //headerBackTitle
        //headerBackTitleStyle
        //headerTruncatedBackTitle

        //headerRight
        //headerLeft
        //headerLeftContainerStyle
        //headerRightContainerStyle

        //headerStyle
        //headerForceInset
        //headerPressColorAndroid
        //headerTransparent

        //gesturesEnabled
        //gestureResponseDistance
        //gestureDirection
        //params
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}


const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
    }
);

export default createAppContainer(AppNavigator);
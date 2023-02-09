import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    function handleNavigation(screenName) {
        // console.log(screenName);
        navigation.navigate(screenName);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text>Home Screen</Text> */}
            <View>
                {/* screenbtn1 */}
                <TouchableOpacity
                    onPress={() => handleNavigation("Screen2")}
                    style={{ backgroundColor: "lightblue", padding: 30, marginBottom: 20 }}>
                    <Text>Screen2</Text>
                </TouchableOpacity>
                {/* screenbtn2 */}
                <TouchableOpacity
                    onPress={() => handleNavigation("Screen3")}
                    style={{ backgroundColor: "lightblue", padding: 30, marginBottom: 20 }}>
                    <Text>Screen3</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
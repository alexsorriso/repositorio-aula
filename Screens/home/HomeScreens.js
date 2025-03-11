import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
function HomeScreens() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Image
style={styles.logo}
source={require('../../images/logo.jpg')}
/>
<Text>Home Screen</Text>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
title: {
fontSize: 24,
marginBottom: 20,
},
picker: {
    height: 50,
    width: 200,
    },
    logo:{
    width: 100,
    height: 100,
    marginBottom: 20
    }
    });
    export default HomeScreens;
    
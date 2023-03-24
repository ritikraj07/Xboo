import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native'
import { Text } from '@rneui/themed';


// import { Image } from '@rneui/themed';
function Home(props) {
    return (
        <ScrollView style={styles.homeContanier}>
            <View style={styles.banner}>
                <Text h2 style={{fontSize:30, fontFamily:''}} >X</Text>
                <Text h4>Cellence</Text>
            </View>
         
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    homeContanier: {
        flex:1
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    }
})





export default Home;


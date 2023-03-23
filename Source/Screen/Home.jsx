import React from 'react';
import { View, ScrollView, StyleSheet, Image, TextInput, ImageBackground, FlatList } from 'react-native'
import { Text, Icon } from '@rneui/themed';
import SearchCom from '../Components/SearchCom';
import SlliderBanner from '../Components/SlliderBanner';


function Home(props) {
    return (
        <ScrollView style={styles.homeContanier}>
            
            <View style={styles.banner}>
                <Text h2 style={{ fontSize: 30, fontFamily:'Fasthand', color:'green'}} >X</Text>
                <Text h4 style={{ fontSize: 30, fontFamily: 'Fasthand', color: 'red' }} >Cellence</Text>
            </View>
            <SearchCom />
            <SlliderBanner/>
            <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9Veuno9ctginawyA90z8OzOFltYgo3b1TYRFWbSKCjllsL69Yuwl2LwumWA1GGgYWRs&usqp=CAU' }}
                style={{ width: '100%', height: 180, marginVertical:15, alignItems:'center', justifyContent:'center'}}>
                <View style={{borderRadius:10}}>
                    <Image source={{ uri: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236blbhins/gallery/in-galaxy-f23-6gb-ram-sm-e236blbhins-531512718?$730_584_PNG$' }}
                        style={{width:100, height:100, borderWidth:2, borderColor:'white', backgroundColor:'white', borderRadius:5}}
                    /> 
                    <Text></Text>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    homeContanier: {
        flex: 1,
        backgroundColor:'white'
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },

})





export default Home;


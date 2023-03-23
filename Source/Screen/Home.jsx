import React from 'react';
import { View, ScrollView, StyleSheet, Image, TextInput, ImageBackground, FlatList } from 'react-native'
import { Text, Icon } from '@rneui/themed';
import SearchCom from '../Components/SearchCom';
import SlliderBanner from '../Components/SlliderBanner';
import Posters from '../Components/Posters';
import GridPoster from '../Components/GridPoster';


function Home(props) {
    return (

        <View style={styles.homeContanier}>
            <View style={styles.banner}>
                <Text h2 style={{ fontSize: 30, fontFamily:'Fasthand', color:'green'}} >X</Text>
                <Text h4 style={{ fontSize: 30, fontFamily: 'Fasthand', color: 'red' }} >Cellence</Text>
            </View>
            {/* <SearchCom /> */}
            <ScrollView>
            <SlliderBanner />
            <Posters link={'https://flipkart-data.onrender.com/bestselling'} background={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9Veuno9ctginawyA90z8OzOFltYgo3b1TYRFWbSKCjllsL69Yuwl2LwumWA1GGgYWRs&usqp=CAU'} />
            <GridPoster offerName={'Bumfer Offer Ba!'} link={'https://flipkart-data.onrender.com/electronics'} background={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU'} />
            <Posters link={'https://flipkart-data.onrender.com/fashion'} background={'https://c4.wallpaperflare.com/wallpaper/811/164/1020/glossy-pink-background-wallpaper-preview.jpg'} />
            <Posters link={'https://flipkart-data.onrender.com/disforyou'} background={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9Veuno9ctginawyA90z8OzOFltYgo3b1TYRFWbSKCjllsL69Yuwl2LwumWA1GGgYWRs&usqp=CAU'} />
            <GridPoster offerName={'Lolli Pop Offer!'} link={'https://flipkart-data.onrender.com/electronics'} background={'https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg?w=360'} />
            <Posters link={'https://flipkart-data.onrender.com/groceries'} background={'https://c4.wallpaperflare.com/wallpaper/811/164/1020/glossy-pink-background-wallpaper-preview.jpg'} />
            </ScrollView>
        </View>
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


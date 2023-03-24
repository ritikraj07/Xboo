import { useRef, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text, Animated, Dimensions } from 'react-native'
import { Icon } from '@rneui/themed';
import SearchCom from '../Components/SearchCom';
import SlliderBanner from '../Components/SlliderBanner';
import Posters from '../Components/Posters';
import GridPoster from '../Components/GridPoster';
import Notification from '../Components/Notification';
const phWidth = Dimensions.get('window').width;

function Home({navigation}) {
    const [no_of_notification, set_no_of_notification] = useState(0)
    const Hpadding = useRef(new Animated.Value(0)).current;
    const wid = useRef(new Animated.Value(0)).current;
    
    function on() {
        Animated.spring(Hpadding, { toValue: 10 }).start()
        Animated.spring(wid, { toValue: phWidth-102 }).start()
    }
    function off() {
        Animated.spring(Hpadding, { toValue: 0 }).start()
        Animated.spring(wid, { toValue: 0 }).start()
    }

    
    return (

        <View style={styles.homeContanier}>
            <Notification Hpadding={Hpadding} wid={wid} off={off} />
            <View style={styles.banner}>
                <Image source={require('./logo2.png')} style={{ width: 120, height: 60, marginRight: 0 }} />
                <View style={{ flexDirection: 'row', width:60, justifyContent:'space-between'}} >
                    <TouchableOpacity onPress={() => navigation.navigate('SearchCom')} >
                        <Icon name='search' type='feather' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'relative' }} onPress={()=>on()} >
                        <Icon name='bell' type='feather' size={23} />
                        <Text style={{ position: 'absolute', color: 'green', fontSize: 18, fontWeight: 800, bottom: '50%', right: '50%' }} >{no_of_notification }</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <SlliderBanner />
                <Posters link={'https://flipkart-data.onrender.com/bestselling'} background={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9Veuno9ctginawyA90z8OzOFltYgo3b1TYRFWbSKCjllsL69Yuwl2LwumWA1GGgYWRs&usqp=CAU'} />
                <GridPoster offerName={'Bumfer Offer Ba!'} link={'https://flipkart-data.onrender.com/electronics'} background={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU'} />
                <Posters link={'https://flipkart-data.onrender.com/fashion'} background={'https://c4.wallpaperflare.com/wallpaper/811/164/1020/glossy-pink-background-wallpaper-preview.jpg'} />
                <Posters link={'https://flipkart-data.onrender.com/disforyou'} background={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9Veuno9ctginawyA90z8OzOFltYgo3b1TYRFWbSKCjllsL69Yuwl2LwumWA1GGgYWRs&usqp=CAU'} />
                <GridPoster offerName={'Lolli Pop Offer!'} link={'https://flipkart-data.onrender.com/electronics'} background={'https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg?w=360'} />
                <Posters link={'https://flipkart-data.onrender.com/groceries'} background={'https://c4.wallpaperflare.com/wallpaper/811/164/1020/glossy-pink-background-wallpaper-preview.jpg'} />

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
        position:'relative'

    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10
    },

})





export default Home;


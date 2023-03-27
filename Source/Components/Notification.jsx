import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Icon } from '@rneui/themed';
function Notification({ Hpadding, wid, off }) {
    
    return (
        <Animated.View style={[styels.Noti, {width: wid }]}>
            <ImageBackground resizeMode='cover' source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU",
            }} style={{
                flexDirection: 'row', width: '105%', justifyContent: 'space-between', height: 60, alignItems: 'center', paddingHorizontal:12}} >
                <Text style={{ fontSize: 25, fontWeight:800 }} >Notification</Text>
                <TouchableOpacity onPress={()=>off()}>
                    <Icon name='cross' type='entypo' size={30} />
                </TouchableOpacity>
            </ImageBackground>

            <ScrollView style={{}} >
                <View style={styels.notifi}>
                    <View>
                        <Image source={{ uri:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204'}} style={styels.img} />
                    </View>
                    <View>
                        <Text style={styels.heading} >iPhone 16 Pro Max</Text>
                        <Text style={styels.message}>Buy exclusive iphone 16 Pro Max</Text>
                    </View>
                </View>

                <View style={styels.notifi}>
                    <View>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ljxTBpTCL._SY355_.jpg' }} style={styels.img} />
                    </View>
                    <View>
                        <Text style={styels.heading} >Branded Headphone</Text>
                        <Text style={styels.message}>Buy exclusive BoAt Headphone</Text>
                    </View>
                </View>
                <View style={styels.notifi}>
                    <View>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511I-E3vN2L._UX522_.jpg' }} style={styels.img} />
                    </View>
                    <View>
                        <Text style={styels.heading} >Brand New tShirt</Text>
                        <Text style={styels.message}>Branded tshirt made of 100% cotton</Text>
                    </View>
                </View>
           </ScrollView>
        </Animated.View>
    )
}
export default Notification;
const styels = StyleSheet.create({
    Noti: {
        position: 'absolute',
        zIndex: 2,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'white',
    },
    notifi: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        paddingRight: 20,
        
    },
    img: {
        width: 60,
        height:60
    },
    heading: {
        fontSize: 18,
        fontWeight:700
    },
    message: {
        paddingRight:40
    }
})
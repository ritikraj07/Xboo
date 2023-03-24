import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
function Notification({ Hpadding, wid, off }) {
    

    return (
        <Animated.View style={[styels.Noti, { paddingHorizontal: Hpadding, width: wid }]}>
            <View style={{
                flexDirection: 'row', width: '100%', justifyContent:'space-around'}} >
                <Text style={{ fontSize: 20 }} >Notification</Text>
                <TouchableOpacity onPress={()=>off()}>
                    <Icon name='cross' type='entypo' size={30} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
                <Text>Hello Devil How is the josh</Text>
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
        backgroundColor: 'white'
    }
})
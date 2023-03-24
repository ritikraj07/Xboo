import React from 'react';
import { View, Text } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import SignUp from '../SignIn/SignUp';
import PhoneOtp from '../SignIn/PhoneOtp';

function Cart(props) {
    
    return (
        <View>
            <PhoneOtp/>
        </View>
    );
}

export default Cart;
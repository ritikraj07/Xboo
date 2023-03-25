import React from 'react';
import { View, Text } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import ProductList from '../Components/ProductList';

function Cart(props) {
    
    return (
        <View>
            <ProductList/>
        </View>
    );
}

export default Cart;
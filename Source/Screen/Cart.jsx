import React, { useEffect, useState } from 'react';
import { Text, Image, Button } from '@rneui/themed';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Constants from 'expo-constants';
import * as LocationProvider from 'expo-location';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsM from 'react-native-vector-icons/MaterialIcons';

function Location() {
  const [location, setLocation] = useState(null);

  const checkLocation = async () => {
    const { coords } = await LocationProvider.getCurrentPositionAsync({});
    setLocation({ latitude: coords.latitude, longitude: coords.longitude });
  };

  return (
    <View style={styles.locationContainer}>
      <IconsM size={22} name='location-on' />
      <Text onPress={checkLocation}>Check for delivery availability</Text>
    </View>
  );
}

function QtySelect({ qty ,index}) {
    const handleDecrease = () => {
        const updatedCart = [...cart];
        if (updatedCart[index].qun > 1) {
            updatedCart[index].qun -= 1;
        } else {
            updatedCart.splice(index, 1);
        }
        setCart(updatedCart);
        firestore()
        .collection(auth()._user.uid).doc('Cart')
        .set(updatedCart)
        .then((e) => {
          // console.log(e);
        }).catch((e) => {
          // console.log(e)
        })
    };

    const handleIncrease = () => {
        const updatedCart = [...cart];
        updatedCart[index].qun += 1;
        setCart(updatedCart);
        firestore()
        .collection(auth()._user.uid).doc('Cart')
        .set(updatedCart)
        .then((e) => {
          // console.log(e);
        }).catch((e) => {
          // console.log(e)
        })
    };

  return (
    <View style={styles.qtySelectContainer}>
      <TouchableOpacity onPress={handleDecrease}>
        <Icons size={20} name={qty > 1 ? 'minus-thick' : 'delete'} />
      </TouchableOpacity>
      <TextInput value={qty} style={styles.qtyInput} />
      <TouchableOpacity onPress={handleIncrease}>
        <Icons size={20} name='plus-thick' />
      </TouchableOpacity>
    </View>
  );
}

export default function Cart({navigation}) {
  const [cart, setCart] = useState([]);
  useEffect(async()=>{
    let Auth = auth()._user
    if (!Auth) {
      Alert.alert('XBoo!  Message', "You haven't login baby \n Pehla login kare phir istam kara",)
      navigation.navigate('EmailAuth')
    } else {
      const cartFetched = await firestore().collection(auth()._user.uid).doc('Cart').get();
        setCart(cartFetched)
    }
  },[])
  const item = ({ item }) => {
    return (
      <View style={styles.cartItemContainer}>
        <View>
          <Image
            source={{ uri: item.image }}
            style={styles.productImage}
            resizeMode='contain'
          />
          <QtySelect qty={item.qun} />
        </View>
        <View style={styles.itemInfoContainer}>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>₹{item.new_price}.00</Text>
          <Text style={styles.itemStatus}>Eligible for Free Shipping</Text>
          <Text style={styles.itemStatus}>In stock</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
    <Location />
    {!cart.length ? (
      <View style={styles.emptyCartContainer}>
        <Image
          source={{ uri: "https://pic.onlinewebfonts.com/svg/img_171562.png" }}
          style={styles.emptyCartImage}
          resizeMode="contain"
        />
        <Text>Your Cart is Empty</Text>
      </View>
    ) : (
      <ScrollView>
        <View style={styles.subtotalContainer}>
          <Text>SubTotal ₹{cart.reduce((ac, e) => ac + e.new_price * e.qun, 0)}.0</Text>
          <Text>Your order is eligible for Delivery</Text>
        </View>
        <FlatList
          data={cart}
          renderItem={item}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          ListFooterComponent={() => (
            <Button title="Proceed to Buy" style={styles.buyButton} />
          )}
        />
      </ScrollView>
    )}
  </View>

  );
}

let styles = StyleSheet.create({
  flex:{
    flexDirection:'row',
    alignItems:'center'
  },
  prodImg:{
    aspectRatio: 1,
  width: 100,
  height: 150,
  },
  cartItem:{
    // borderWidth:1,
    paddingTop:15,
    padding:10,
    alignItems:'center',
  },
  separator:{
    width: '90%',
    alignSelf:'center',
    borderColor:'#989898',
    borderBottomWidth:2,
    margin:0
  },container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    marginRight: 10,
    color: '#333333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  cartItemDetailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  cartItemQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  cartItemQuantityButton: {
    padding: 5,
  },
  cartItemQuantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginHorizontal: 10,
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subTotalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  proceedToCheckoutButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    borderRadius: 5,
  },
  proceedToCheckoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  }
})


 
async function AddtoCart() {
    let Auth = auth()._user
    if (!Auth) {
      Alert.alert('XBoo!  Message', "You haven't login baby \n Pehla login kare phir istam kara",)
      navigation.navigate('EmailAuth')
    } else {
      const user = await firestore().collection(auth()._user.uid).doc('Cart').get();
      firestore()
        .collection(auth()._user.uid).doc('Cart')
        .set({ "cart": user._exists ? [...user._data?.cart, { ...item, qun: 1 }] : [{ ...item, qun: 1 }] })
        .then((e) => {
          // console.log(e);
          setcartbtm(true)
        }).catch((e) => {
          // console.log(e)
        })
    }
  }

import React, { useEffect, useState, useRef, Alert } from 'react';
import { Text, Image, Button, Icon } from '@rneui/themed';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Animated, Dimensions, FlatList, ScrollView, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsM from 'react-native-vector-icons/MaterialIcons';

const phWidth = Dimensions.get('window').width;
export default function Cart({ navigation }) {
  const [no_of_notification, set_no_of_notification] = useState(3)
  const Hpadding = useRef(new Animated.Value(0)).current;
  const wid = useRef(new Animated.Value(0)).current;

  function on() {
    Animated.spring(Hpadding, { toValue: 10, overshootClamping: true, useNativeDriver: false }).start()
    Animated.spring(wid, { toValue: phWidth - 102, overshootClamping: true, useNativeDriver: false }).start()
  }
  function off() {
    Animated.spring(Hpadding, { toValue: 0, overshootClamping: true, useNativeDriver: false }).start()
    Animated.spring(wid, { toValue: 0, overshootClamping: true, useNativeDriver: false }).start()
  }
  const [cart, setCart] = useState([]);
  useEffect(() => {
    firestore().collection(auth()._user.uid)?.doc('Cart')?.get()
      .then((rs) => {
        if (rs._data.cart) {
          setCart(rs._data.cart)
        } else {
          setCart([])
        }
      })
  }, [])

  function QtySelect({ qty, index }) {
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
        .set({ cart: updatedCart })
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
        .set({ cart: updatedCart })
        .then((e) => {
          // console.log(e);
        }).catch((e) => {
          // console.log(e)
        })
    };

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <TouchableOpacity onPress={() => handleDecrease()}><Icons size={20} name={qty > 1 ? 'minus-thick' : 'delete'} /></TouchableOpacity>
        <Text style={{ width: 45, textAlign: 'center' }} > {qty}</Text>
        <TouchableOpacity onPress={() => handleIncrease()}><Icons size={20} name='plus-thick' /></TouchableOpacity>
      </View>
    );
  }

  function item({ item, index }) {
    return <View style={{ ...styles.flex, ...styles.cartItem }}>
      <View>
        <Image source={{ uri: item.image }} style={{ ...styles.prodImg }} resizeMode='contain' />
        <QtySelect qty={item.qun} index={index} />
      </View>
      <View style={{ flex: 1 }}>
        <Text>{item.description}</Text>
        <Text>₹{item.new_price}.00</Text>
        <Text>Eligible for Free Shipping</Text>
        <Text>In stock</Text>
      </View>
    </View>
  }

  return (
    <View>

      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU",
        }}
        resizeMode="cover"

      >
        <View style={styles.banner}>
          <Image source={require('./logo2.png')} style={{ width: 120, height: 60, marginRight: 0 }} />
          <View style={{ flexDirection: 'row', width: 60, justifyContent: 'space-between' }} >
            <TouchableOpacity onPress={() => navigation.navigate('SearchCom')} >
              <Icon name='search' type='feather' />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'relative' }} onPress={() => on()} >
              <Icon name='bell' type='feather' size={23} />
              <Text style={{ position: 'absolute', color: 'green', fontSize: 18, fontWeight: 800, bottom: '50%', right: '50%' }} >{no_of_notification}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      {cart.length == 0 ? (
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
          <View style={{ padding: 10 }}>
            <Text>SubTotal ₹{cart.reduce((ac, e) => { return ac + e.new_price * e.qun }, 0)}.0</Text>
            <Text>Your order is eligible for Delivery</Text>
          </View>
          <FlatList
            data={cart}
            scrollEnabled={false}
            renderItem={item}
            ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            ListFooterComponent={() => <Button onPress={() => navigation.navigate('Address')} title="Proceed to Buy" style={{ width: 230, alignSelf: 'center', paddingBottom: 20 }} />}
          />

        </ScrollView>
      )}
    </View>

  );
}


let styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10
  },
  prodImg: {
    aspectRatio: 1,
    width: 100,
    height: 150,
  },
  cartItem: {
    // borderWidth:1,
    paddingTop: 15,
    padding: 10,
    alignItems: 'center',
  },
  separator: {
    width: '90%',
    alignSelf: 'center',
    borderColor: '#989898',
    borderBottomWidth: 2,
    margin: 0
  }, container: {
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
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  emptyCartImage: {
    aspectRatio: 1,
    width: 100,
    height: 100,
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

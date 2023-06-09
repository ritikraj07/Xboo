import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AirbnbRating } from "@rneui/themed";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ProductDescription({ navigation }) {
  const route = useRoute();
  const { item } = route.params;
  const [wishlist, setwishlist] = React.useState(false);
  const [cartbtm, setcartbtm] = React.useState(false)
 
  async function AddtoCart() {
    const user = await firestore().collection(auth()._user.uid).doc('Cart').get();
      firestore()
        .collection(auth()._user.uid).doc('Cart')
        .set({ "cart": user._exists && user._data.cart ? [...user._data?.cart, { ...item, qun: 1 }] : [{ ...item, qun: 1 }] })
        .then((e) => {
          setcartbtm(true)
        }).catch((e) => {})
  }
  async function AddtoWishList() {
      const user = await firestore().collection(auth()._user.uid).doc('WishList').get();
      firestore().collection(auth()._user.uid).doc('WishList')
        .set({ "wishlist": user._exists && user._data?.wishlist ? [...user._data?.wishlist, { ...item, qun: 1 }] : [{ ...item, qun: 1 }] })
        .then((e) => { setwishlist(true) })
        .catch((e) => { })
    }


  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU",
        }}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View style={styles.headerView}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-sharp"
                size={24}
                color="black"
                style={{ paddingTop: 2 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", padding: 5 }}>
            <TouchableOpacity onPress={() => navigation.navigate("SearchCom")}>
              <Feather name="search" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SearchCom")}>
              <MaterialCommunityIcons
                name="microphone"
                size={22}
                color="black"
                style={{ paddingLeft: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 15,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{ alignItems: "flex-end", paddingRight: 10 }}
          onPress={() => AddtoWishList()}
        >
          {wishlist ? (
            <AntDesign name="heart" size={24} color="red" />
          ) : (
            <AntDesign name="hearto" size={24} color="#EBEDF0" />
          )}
        </TouchableOpacity>
        <Image
          source={{ uri: item?.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.details}>
          <Text style={{ color: "gray" }}>{item?.category_name}</Text>
          <Text style={styles.name}>{item.description}</Text>

          <View
            style={{
              flexDirection: "row",
              paddingBottom: 5,
              paddingVertical: 8,
            }}
          >
            <AirbnbRating
              defaultRating={item.stars}
              isDisabled={true}
              showRating={false}
              size={20}
            />
            <Text
              style={styles.rating}
            >{`${item?.hidden_stars} (${item?.ratings})`}</Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "green",
              paddingBottom: 5,
            }}
          >
            {item?.delivery_type}
          </Text>
          <View style={{ backgroundColor: "#E6F0FF", padding: 10 }}>
            <Text
              style={{
                fontSize: 12,
                color: "green",

                marginRight: 10,
              }}
            >
              Special Price
            </Text>
            <View
              style={{ flexDirection: "row", paddingTop: 5, paddingLeft: 5 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "green",
                  marginTop: 4,
                  fontWeight: "bold",
                  marginRight: 10,
                }}
              >{`${item?.discount}% off`}</Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "gray",
                  marginTop: 4,
                  fontWeight: "bold",
                  textDecorationLine: "line-through",
                  marginRight: 10,
                }}
              >
                ₹{item?.old_price}
              </Text>

              <Text style={styles.price}>₹{item?.new_price}</Text>
            </View>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 13, paddingTop: 4 }}>
            Buy Now and Pay ₹{item?.new_price} next month using Pay Later
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <TouchableOpacity onPress={()=>AddtoCart()} style={{ flex: 1, height: 40, paddingVertical: 10 }}>
          <Text
            style={{ alignSelf: "center", fontSize: 15, fontWeight: "bold" }}
          >
            {cartbtm?"Added to Cart" :"Add to Cart"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "orange",
            height: 40,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 15,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ProductDescription;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    height: 60,
    padding: 15,
    justifyContent: "space-between",
  },

  image: {
    width: "100%",
    height: 350,
  },
  details: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
    marginRight: 10,
  },
  rating: {
    fontSize: 15,
    color: "#888",

    marginLeft: 12,
    marginTop: 4,
  },
});

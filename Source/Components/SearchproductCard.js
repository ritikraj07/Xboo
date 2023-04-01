import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AirbnbRating } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function SearchProductCard({ item }) {
  const [wishlist, setwishlist] = React.useState(false);
  const navigation = useNavigation();
  
  async function AddtoWishList() {
    let Auth = auth()._authResult
    if (!Auth) {
      Alert.alert('XBoo!  Message', "You haven't login baby \n LogIn first!",)
      navigation.navigate('EmailAuth')
    } else {
      const user = await firestore().collection(auth()._user.uid).doc('WishList').get();
      firestore().collection(auth()._user.uid).doc('WishList')
        .set({ "wishlist": user._exists ? [...user._data?.wishlist, { ...item, qun: 1 }] : [{ ...item, qun: 1 }] })
        .then((e) => {
          // console.log(e);
          setwishlist(true)
        }).catch((e) => {
          // console.log(e)
        })
    }
  }


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Searchproductdesc", { item })}
    >
      <TouchableOpacity
        style={{ alignItems: "flex-end" }}
        onPress={() => AddtoWishList()}
      >
        {wishlist ? (
          <AntDesign name="heart" size={20} color="red" />
        ) : (
          <AntDesign name="hearto" size={20} color="#EBEDF0" />
        )}
      </TouchableOpacity>
      <Image
        source={{ uri: item?.thumbnail }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.details}>
        <Text style={styles.name}>
          {item.name.length > 40 ? item.name.substring(0, 40) : item.name}
        </Text>
        <View style={{ flexDirection: "row", paddingTop: 5, paddingLeft: 5 }}>
          <Text
            style={{
              fontSize: 12,
              color: "gray",
              marginTop: 8,
              textDecorationLine: "line-through",
              marginRight: 10,
            }}
          >
            ₹{item?.original_price}
          </Text>

          <Text style={styles.price}>
            {item?.current_price
              ? `₹${item?.current_price} (${Math.floor(Math.random() * 50) + 2}% off)`
              : `₹${item?.current_price}`}
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <AirbnbRating
            defaultRating={Math.floor(Math.random() * 5) + 1}
            isDisabled={true}
            showRating={false}
            size={10}
          />
          <Text style={styles.rating}>{Math.floor(Math.random() * 5) + 1}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "#EBEDF0"
  },
  image: {
    width: 155,
    height: 200,
    marginTop: -5,
  },
  details: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
  },
  price: {
    fontSize: 12,
    color: "green",
    marginTop: 8,
    marginRight: 10,
  },
  rating: {
    fontSize: 12,
    color: "#888",
    marginLeft: 3,
  },
});

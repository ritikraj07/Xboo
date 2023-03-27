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

export default function ProductCard({ item }) {
  const [wishlist, setwishlist] = React.useState(false);
  const navigation = useNavigation();
  /*const [product,setProduct]=React.useState({});
  

  React.useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{setProduct(data); console.log(data)})
    .catch(err=>console.log(err));
  },[])*/

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("productdesc", { item })}
    >
      <TouchableOpacity
        style={{ alignItems: "flex-end" }}
        onPress={() => setwishlist(true)}
      >
        {wishlist ? (
          <AntDesign name="heart" size={20} color="red" />
        ) : (
          <AntDesign name="hearto" size={20} color="#EBEDF0" />
        )}
      </TouchableOpacity>
      <Image
        source={{ uri: item?.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.details}>
        <Text style={styles.name}>
          {item.description.length > 40
            ? item.description.substring(0, 40)
            : item.description}
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
            ₹{item?.old_price}
          </Text>

          <Text style={styles.price}>
            {item?.new_price
              ? `₹${item?.new_price} (${item?.discount}% off)`
              : `₹${item?.new_price}`}
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <AirbnbRating
            defaultRating={item.stars}
            isDisabled={true}
            showRating={false}
            size={10}
          />
          <Text style={styles.rating}>{item?.hidden_stars}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 175,
    backgroundColor: "white",
    paddingTop: 10,
    padding: 5,
    borderWidth: 0.5,
    borderColor: "#EBEDF0",
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

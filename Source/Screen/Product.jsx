import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { moreCategory, category } from "../Data/category";
import { useNavigation } from "@react-navigation/native";

function Product(props) {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU",
        }}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View style={style.headerView}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: 500 }}>
            All categories
          </Text>
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

      <View style={style.containerView}>
        {category.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={style.TouchIcon}
              onPress={() => navigation.navigate("productList", { item })}
            >
              <Image source={{ uri: item.icon }} style={style.iconImage} />
              <Text style={style.iconText}>{item.category}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ padding: 10, paddingTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>More on Xcell</Text>
          <View style={style.hLView}></View>
        </View>
        <View style={style.containerView}>
          {moreCategory.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={style.TouchIcon}>
                <Image source={{ uri: item.icon }} style={style.iconImage} />
                <Text style={style.iconText}>{item.category}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default Product;

const style = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    height: 60,
    padding: 15,
    justifyContent: "space-between",
  },
  containerView: {
    flexDirection: "row",
    paddingTop: 20,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  TouchIcon: {
    padding: 10,
    paddingVertical: 15,
  },
  iconImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  iconText: {
    alignSelf: "center",
    paddingTop: 5,
    fontWeight: 500,
  },

  hLView: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
    width: 200,
    marginLeft: 15,
  },
});

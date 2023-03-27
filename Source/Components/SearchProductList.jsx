import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, MaterialCommunityIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import SearchProductCard from "./SearchproductCard";
import FilterAndSortComponent from "./Filter";

function SearchProductList({ navigation }) {
  const route = useRoute();
  const { search } = route.params;
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://flipkart.dvishal485.workers.dev/search/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(()=>{

  },[product])
const priceLow=()=>{
 
  const sortedProducts = [...product].sort((a, b) => {
          return a.current_price - b.current_price;
    }
  );
  
  setProduct(sortedProducts);  
}
const pricehigh=()=>{
  const sortedProducts = [...product].sort((a, b) => {
    return b.current_price - a.current_price;
}
);

setProduct(sortedProducts);  
}

const nameLow=()=>{
  const sortedProducts = [...product].sort((a, b) => {
    return a.name - b.name;
}
);

setProduct(sortedProducts);  
}

const nameHigh=()=>{
  const sortedProducts = [...product].sort((a, b) => {
    return b.name - a.name;
}
);
setProduct(sortedProducts);  
}




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
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-sharp"
                size={24}
                color="black"
                style={{ paddingTop: 2 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: 500,
                paddingLeft: 10,
              }}
            >
              {search}
            </Text>
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
      <ScrollView horizontal={true}>
        <View style={{flexDirection:"row",paddingVertical:10,justifyContent:"space-between"}} >
        <TouchableOpacity onPress={()=>{console.log("Sort"); priceLow()}} style={{flexDirection:"row", borderRadius:10, borderColor:"#EBEDF0",backgroundColor:"#EBEDF0", paddingVertical:3, paddingHorizontal:6, borderWidth:1,marginHorizontal:5}}>
        <FontAwesome name="sort-amount-asc" size={14} color="gray" style={{paddingTop:2}} />
        <Text style={{paddingLeft:3}}>Price:Low to high</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{console.log("Sort"); pricehigh()}} style={{flexDirection:"row", borderRadius:10, borderColor:"#EBEDF0",backgroundColor:"#EBEDF0", paddingVertical:3, paddingHorizontal:6, borderWidth:1,marginHorizontal:5}}>
        <FontAwesome name="sort-amount-desc" size={14} color="gray" style={{paddingTop:2}}/>
        <Text style={{paddingLeft:3}}>Price:High to Low</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{console.log("Sort"); nameLow()}} style={{flexDirection:"row", borderRadius:10, borderColor:"#EBEDF0",backgroundColor:"#EBEDF0", paddingVertical:3, paddingHorizontal:6, borderWidth:1,marginHorizontal:5}}>
        <FontAwesome name="sort-alpha-asc" size={14} color="gray" style={{paddingTop:2}} />
        <Text style={{paddingLeft:3}}>Asc:A to Z</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{console.log("Sort"); nameHigh()}} style={{flexDirection:"row", borderRadius:10, borderColor:"#EBEDF0",backgroundColor:"#EBEDF0", paddingVertical:3, paddingHorizontal:6, borderWidth:1,marginHorizontal:5}}>
        <FontAwesome name="sort-alpha-desc" size={14} color="gray" style={{paddingTop:2}}/>
        <Text style={{paddingLeft:3}}>Desc:Z to A</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={{flexDirection:"row", borderRadius:10, borderColor:"#EBEDF0",backgroundColor:"#EBEDF0", paddingVertical:3, paddingHorizontal:6, borderWidth:1,marginHorizontal:5}}>
        <FontAwesome name="filter" size={16} color="gray" style={{paddingTop:2}}/>
        <Text style={{paddingLeft:3}}>Filters</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          width: "100%",
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        <FlatList
          data={product}
          renderItem={({ item }) => <SearchProductCard item={item} />}
          scrollEnabled={false}
          keyExtractor={(item) => item.name}
          numColumns={2}
        />
      </View>
    </ScrollView>
  );
}

export default SearchProductList;

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

import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProductCard from "./ProductCard";

function ProductList() {
   const route = useRoute();
   const {item} = route.params;
   const [product,setProduct]=React.useState([]);
  const navigation=useNavigation();
 const search=item.category;

React.useEffect(()=>{
  fetch(`https://flipkart.dvishal485.workers.dev/search/${search}`)
  .then((res)=>res.json())
  .then((data)=>setProduct(data.result))
  .catch(err=>console.log(err));
},[])


  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU",
        }}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
      <View
        style={style.headerView}
      >
        <View style={{ flexDirection: "row"}}>
            <TouchableOpacity>
        <Ionicons name="arrow-back-sharp" size={24} color="black" style={{ paddingTop: 2 }}/></TouchableOpacity>
        <Text style={{ fontSize: 20, color: "black",fontWeight:500, paddingLeft: 10 }}>{search}</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity>
            <Feather name="search" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
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

      
     <View style={{flexWrap: "wrap",flexDirection:"row"}}>
     {product.map((item)=>{
        return (<ProductCard url={item.query_url} />)
     })}

     </View>
      
   
    </ScrollView>
  );
}

export default ProductList;

const style = StyleSheet.create({
    headerView:{
        
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
    fontWeight:500,
  },

  hLView:{
    marginTop:15,
    borderTopWidth:1,
    borderTopColor:"#BDBDBD",
    width:200,
    marginLeft:15,
    
  }
});

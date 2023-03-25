import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import { useNavigation, useRoute } from "@react-navigation/native";
  
export default function ProductCard({url}) {
  const [product,setProduct]=React.useState({});
  const [photo, setphotoUrl]=React.useState("");

  React.useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{setProduct(data); console.log(data)})
    .catch(err=>console.log(err));
  },[])

  return (
    <View>
      
    <Text style={styles.name}>{product?.name}</Text>
    
    <Text>{typeof(product?.thumbnails[0])}</Text>
    </View>
  )
}


const ProductData=({product})=>{
console.log(product);
  return(
<View style={styles.container}>
      <Image source={{ uri: product?.thumbnails[0] }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product?.name}</Text>
        <Text style={styles.price}>
          {product?.discounted
            ? `₹${product?.current_price}  ( ${product?.discount_percent}% off)`
            : `₹${product?.current_price}`}
        </Text>
        <Text style={styles.rating}>{product?.rating} stars</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 120,
    marginRight: 16,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 8,
  },
  rating: {
    fontSize: 12,
    color: '#888',
    marginTop: 8,
  },
});

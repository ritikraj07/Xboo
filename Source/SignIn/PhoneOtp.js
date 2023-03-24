import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";


import { Button } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

export default PhoneOtp = ({phone}) => {
  const [value, onChangeText] = React.useState("");
  return (
    <ScrollView>
    <ImageBackground
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU",
      }}
      resizeMode="cover"
      style={{ flex: 1,height:1000}}
    >
      <View style={{paddingVertical: 10 }}>
        <Entypo name="cross" size={28} color="black" />

        <Image
          source={require("./logo.png")}
          style={{
            width: 120,
            height: 60,
           marginTop:-20,
            alignSelf: "center",
            
          }}
        />
      </View>
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 30,
          paddingTop: 100,
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Text style={{fontWeight:500}}>Please Enter the verification Code we've sent you on +91-{phone}</Text>
        
            <TextInput editable maxLength={6} keyboardType="numeric" onChangeText={text => onChangeText(text)}
        value={value} style={{letterSpacing:40, borderBottomWidth:0.5, paddingLeft:15, marginBottom:20}}/>
         <Button title="Continue" disabled={value.length===6?false:true} />
        </View>

    </ImageBackground>
    </ScrollView>
  );
};



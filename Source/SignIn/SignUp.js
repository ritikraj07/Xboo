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
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

export default SignUp = () => {
  const [value, onChangeText] = React.useState("");
  const navigation=useNavigation();
  
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
        <Text style={{fontWeight:500}}>Log in for the Best Experience</Text>
        <Text style={{paddingBottom:30, fontSize:12,paddingTop:10}}>Enter your Phone number to continue</Text>
        
        <View>
          <View style={styles.labelContainer}>
            <Text style={{ color: "#73BACD", fontWeight: 500 }}>
              Phone Number
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ marginRight: 15, paddingTop: 5, fontWeight: 500 }}>
              {"+91"}
            </Text>
            <TextInput placeholder="Enter Phone Number" editable maxLength={10}keyboardType="numeric" onChangeText={text => onChangeText(text)}
        value={value}/>
          </View>
        </View>
        <TouchableOpacity onPress={() =>
        navigation.navigate('EmailAuth')
      }>
        <Text style={{alignSelf:"flex-end", color: "#73BACD", paddingVertical:10}}>Use E-mail ID</Text>
        </TouchableOpacity>
        
        <Text style={{fontSize:12, paddingVertical:20}}>By continuing, you agree to Flipkart's <Text style={{color:"blue"}}>Terms of Use</Text> and <Text style={{color:"blue"}}>Privacy Policy</Text></Text>
        <Button title="Continue" disabled={value.length===10?false:true}  onPress={() =>
        navigation.navigate('PhoneOtp', {value})
      }/>
        </View>

    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 10,
    zIndex: 1,
    elevation: 1,
    shadowColor: "white",
    position: "absolute",
    top: -12,
  },
  inputContainer: {
    borderColor: "#73BACD",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    zIndex: 0,
    flexDirection: "row",
  },
});

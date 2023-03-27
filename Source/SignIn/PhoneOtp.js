import React, {useState} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { Button } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

export default PhoneOtp = ({phone}) => {
  const [otp, setotp] = React.useState("");
  const route = useRoute();
  const { confirm } = route.params;
  const navigation = useNavigation();
  async function confirmCode() {
    try {
      let ans = await confirm.confirm(otp);
      console.log(ans)
      Alert.alert('Sign In Successful', 'Lets Rock baby', [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Home'),
          style: 'cancel',
        },
      ],)
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  
  return (
    <ScrollView>
    <ImageBackground
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU",
      }}
      resizeMode="cover"
      style={{ flex: 1,height:1000}}
    >
        <View style={{ paddingVertical: 10 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Entypo name="cross" size={28} color="black" />
          </TouchableOpacity>

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
        <Text style={{fontWeight:500, fontSize:15}}>Please Enter the verification Code we've sent you on +91-{phone}</Text>
        
            <TextInput editable maxLength={6} keyboardType="numeric" onChangeText={text => setotp(text)}
        value={otp} style={{letterSpacing:35, fontSize:20, borderBottomWidth:0.5, paddingLeft:10, marginVertical:40}}/>
         <Button title="Continue" disabled={otp.length===6?false:true} onPress={()=>confirmCode()} />
        </View>

    </ImageBackground>
    </ScrollView>
  );
};



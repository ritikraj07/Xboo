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
import auth from '@react-native-firebase/auth';

export default EmailAuth = () => {
  const [email, onChangeText] = React.useState("");
  const [pass, onChangepass] = React.useState("");
  const navigation=useNavigation();

  const SignIn=()=>{
    auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('User account created & signed in!');
      navigation.navigate('BottomTab')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        auth().signInWithEmailAndPassword(email, pass)
          .then((res) => {
            console.log(res)
            navigation.navigate('BottomTab')
          }).catch((res) => {
            console(res)
          })
        
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
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
      <View style={{paddingVertical: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("BottomTab")}>
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
        <Text style={{fontWeight:500}}>Log in for the Best Experience</Text>
        <Text style={{paddingBottom:30, fontSize:12,paddingTop:10}}>Enter your Email & Password to continue</Text>
        
        <View style={{paddingBottom:25}}>
          <View style={styles.labelContainer}>
            <Text style={{ color: "#73BACD", fontWeight: 500 }}>
              Email ID
            </Text>
          </View>
          
          <View style={styles.inputContainer}>
           
              <TextInput style={{ width:'100%'}} placeholder="Enter email address" onChangeText={text => onChangeText(text)}
        value={email}/>
          </View>
        </View>
        <View>
          <View style={styles.labelContainer}>
            <Text style={{ color: "#73BACD", fontWeight: 500 }}>
              Password
            </Text>
          </View>
          <View style={styles.inputContainer}>
        
              <TextInput style={{ width: '100%' }} placeholder="Enter Password"  onChangeText={text => onChangepass(text)}
        value={pass}/>
          </View>
        </View>
        <TouchableOpacity onPress={() =>
        navigation.navigate('SignUp')
      }>
        <Text style={{alignSelf:"flex-end", color: "#73BACD", paddingVertical:10}}>Use Phone Number</Text>
        </TouchableOpacity>
        
        <Text style={{fontSize:12, paddingVertical:20}}>By continuing, you agree to Flipkart's <Text style={{color:"blue"}}>Terms of Use</Text> and <Text style={{color:"blue"}}>Privacy Policy</Text></Text>
        <Button title="Continue" disabled={pass.length>6?false:true}  onPress={SignIn}
      />
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
